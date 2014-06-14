(ns examples.simple-map.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]
            [ajax.core :refer (GET)]))

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

(defn panel-component
  [cursor owner]
  (om/component
   (dom/div nil
            (dom/h1 nil "Leaflet Map")
            (dom/div #js {:id "panel"}
                     (om/build legend-component cursor)))))

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
