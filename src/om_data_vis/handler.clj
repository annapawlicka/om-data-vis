(ns om-data-vis.handler
  (:use compojure.core)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [liberator.core :refer [resource defresource]]
            [liberator.representation :refer (ring-response as-response)]
            [clojure.java.io :as io]
            [clojure.data.json :as json]))

;; Data - for quick demo only. Should be replaced with database, CSV, etc. ;;
(def data {:devices [{:id "01"
                      :type "electricityConsumption"
                      :description "I'm a device with id 01"
                      :unit "kWh"}
                     {:id "02"
                      :type "gasConsumption"
                      :description "I'm a device with id 02"
                      :unit "kWh"}]
           :measurements [{:id "01" :type "electricityConsumption" :timestamp "01/01/2011" :value 0.8}
                          {:id "01" :type "electricityConsumption" :timestamp "01/02/2011" :value 0.9}
                          {:id "01" :type "electricityConsumption" :timestamp "01/03/2011" :value 0.8}
                          {:id "01" :type "electricityConsumption" :timestamp "01/04/2011" :value 0.75}
                          {:id "01" :type "electricityConsumption" :timestamp "01/05/2011" :value 0.65}
                          {:id "02" :type "gasConsumption" :timestamp "01/01/2011" :value 6}
                          {:id "02" :type "gasConsumption" :timestamp "01/02/2011" :value 10}
                          {:id "02" :type "gasConsumption" :timestamp "01/03/2011" :value 12}
                          {:id "02" :type "gasConsumption" :timestmap "01/04/2011" :value 15}
                          {:id "02" :type "gasConsumption" :timestamp "01/05/2011" :value 18}]})


(defn retrieve-measurements [id type ctx]
  (let [measurements  (filter #(and (= (:id %) id) (= (:type %) type)) (get-in data [:measurements]))]
     (when measurements
       (-> (as-response measurements ctx)
           (assoc-in [:headers "Access-Control-Allow-Origin"] "*")
           (assoc-in [:headers "Access-Control-Allow-Headers"] "X-Requested-With")
           (assoc-in [:headers "Access-Control-Allow-Methods"] "*")
           (ring-response)))))

(defn retrieve-devices [ctx]
  (let [devices (get-in data [:devices])]
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

  (GET "/chart_http" [] {:status 200 :body (slurp (io/resource "chart-http/index.html"))})
  (route/not-found "Not Found"))


(def app
  (handler/site app-routes))
