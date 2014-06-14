(ns examples.simple-map.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]
            [ajax.core :refer (GET)]
            [clojure.string :as string]))

(enable-console-print!)

(def app-model
  (atom
   {:legend {:title nil}
    :leaflet-map nil                   
    :map {:lat 50.06297958283694 :lng 19.94705200195313}}))

(def tile-url "http://{s}.tile.osm.org/{z}/{x}/{y}.png")

(defn legend-component [data owner]
  (om/component
   (let [labels (-> data :data)
         title  (-> data :title)]
     (dom/div #js {:className "my-legend"}))))

(defn create-map
  [cursor id]
  (let [m (-> js/L
              (.map id)
              (.setView (array (:lat cursor) (:lng cursor)) 13))
        tiles (-> js/L (.tileLayer
                        tile-url
                        {:maxZoom 16
                         :attribution "Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2012 CloudMade"}))]

    (.addTo tiles m)
    {:leaflet-map m}))

(defn pan-to-postcode [cursor owner]
  (let [postcode (.toUpperCase (string/replace (om/get-state owner :postcode) #"[\s]+" ""))]
    (GET (str "http://maps.googleapis.com/maps/api/geocode/json?address=" postcode)
        {:handler (fn [body]
                    (let [map    (:leaflet-map @cursor)
                          latlng (-> body (get-in ["results"]) first (get-in ["geometry"]) (get-in ["location"]))]
                      (.panTo map (clj->js {:lat (js/parseFloat (get-in latlng ["lat"]))
                                            :lng (js/parseFloat (get-in latlng ["lng"]))}))))})))

(defn postcode-selector-component
  [cursor owner]
  (reify
    om/IInitState
    (init-state [_]
      {:in (chan (sliding-buffer 1))
       :out (chan (sliding-buffer 1))
       :initialPostCode "30-302 Krakow"})
    om/IWillMount
    (will-mount [_]
      (om/set-state! owner :postcode (om/get-state owner :initialPostCode)))
    om/IRenderState
    (render-state [_ state]
      (dom/div nil
               (dom/h2 nil "Zoom to postcode")
               (dom/input #js {:type "text"
                               :defaultValue (:initialPostCode state)
                               :onChange (fn [e]
                                           (om/set-state! owner :postcode (.-value (.-target e))))
                               :onKeyPress (fn [e] (when (= (.-keyCode e) 13)
                                       (pan-to-postcode cursor owner)))})
               (dom/button #js {:onClick (fn [_] (pan-to-postcode cursor owner))} "Go")))))

(defn panel-component
  [cursor owner]
  (om/component
   (dom/div nil
            (dom/h1 nil "Leaflet Map")
            (dom/div #js {:id "panel"}
                     (om/build legend-component cursor)
                     (om/build postcode-selector-component cursor)))))

(defn drop-pin 
  "Drop pin on click and removes it when it's clicked again."
  [map latlng]
  (let [marker (-> (.addTo (.marker js/L (clj->js latlng)) map))]
      (.on marker "click" (fn [e] (.removeLayer map marker)))))

(defn map-component
  [cursor owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "map"}))
    om/IDidMount
    (did-mount [this]
      (let [node (om/get-node owner)
            {:keys [leaflet-map] :as map} (create-map (:map cursor) node)
            loc {:lng (get-in cursor [:map :lng])
                 :lat (get-in cursor [:map :lat])}]
        (.on leaflet-map "click" (fn [e]
                                   (let [latlng (.-latlng e)]
                                     (drop-pin leaflet-map latlng))))
        (.on leaflet-map "moveend" (fn [e]
                                     (let [center (.getCenter leaflet-map)]
                                       (om/update! cursor [:map :lng] (.-lng center))
                                       (om/update! cursor [:map :lat] (.-lat center)))))
        (.panTo leaflet-map (clj->js loc))
        (om/set-state! owner :map map)
        (om/update! cursor :leaflet-map leaflet-map)))
    om/IDidUpdate
    (did-update [this prev-props prev-state]
      (let [node (om/get-node owner)
            {:keys [leaflet-map] :as map} (om/get-state owner :map)]))))


(om/root map-component app-model {:target (. js/document (getElementById "app"))})
(om/root panel-component app-model {:target (. js/document (getElementById "panel"))})
