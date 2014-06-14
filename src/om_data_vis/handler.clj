(ns om-data-vis.handler
  (:use compojure.core)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [liberator.core :refer [resource defresource]]
            [liberator.representation :refer (ring-response as-response)]
            [qbits.alia :as alia]
            [qbits.hayt :as hayt]
            [clojure.data.json :as json]))


(def cluster (alia/cluster {:contact-points ["localhost"] :port 9042}))

(defn retrieve-measurements [id type ctx]
  (let [session (alia/connect cluster :demo)
        measurements (alia/execute session (hayt/select :measurements (hayt/where [[= :device_id id]
                                                                                   [= :type type]])))]
     (when measurements
       (-> (as-response (map #(-> %
                                  (update-in [:value] read-string)
                                  (update-in [:timestamp] str)) measurements) ctx)
           (assoc-in [:headers "Access-Control-Allow-Origin"] "*")
           (assoc-in [:headers "Access-Control-Allow-Headers"] "X-Requested-With")
           (assoc-in [:headers "Access-Control-Allow-Methods"] "*")
           (ring-response)))))

(defn retrieve-devices [ctx]
  (let [session (alia/connect cluster :demo)
        devices (alia/execute session (hayt/select :devices))]
    (-> (as-response devices ctx)
        (assoc-in [:headers "Access-Control-Allow-Origin"] "*")
        (assoc-in [:headers "Access-Control-Allow-Headers"] "X-Requested-With")
        (assoc-in [:headers "Access-Control-Allow-Methods"] "*")
        (ring-response))))

(defresource measurements-resource [id type]
  :allowed-methods #{:get}
  :available-media-types ["application/json"]
  :handle-ok (partial retrieve-measurements id type))

(defresource devices-resource [_]
  :allowed-methods #{:get}
  :known-content-type? #{"application/edn"}
  :available-media-types #{"application/edn"}
  :handle-ok retrieve-devices)

(defroutes app-routes
  (GET "/" [] "Hello World")
  (ANY "/device/:id/type/:type/measurements/" [id type] (measurements-resource id type))
  (ANY "/devices/" [] devices-resource)
  (route/not-found "Not Found"))


(def app
  (handler/site app-routes))
