(ns examples.simple-map.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]
            [ajax.core :refer (GET)]
            [clojure.string :as string]
            [om-data-vis.forms :as forms]
            [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(def app-model
  (atom
   {:map {:leaflet-map nil
          :map {:lat 50.06297958283694 :lng 19.94705200195313}}
    :panel {:coordinates nil}}))

(def tile-url "http://{s}.tile.osm.org/{z}/{x}/{y}.png")

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

(defn coordinates-component [cursor owner]
  (om/component
   (html
    [:section
     [:h3 "Coordinates"]
     [:p "(Click anywhere on a map)"]
     [:div {:class "well" :style #js {:width "100%" :height 70}}
      (when cursor
        [:div
         [:label (str "Lat: " (.-lat cursor))]
         [:label (str "Lng: " (.-lng cursor))]])]])))

(defn pan-to-postcode [cursor owner postcode]
  (let [postcode (.toUpperCase (string/replace postcode #"[\s]+" ""))]
    (GET (str "http://maps.googleapis.com/maps/api/geocode/json?address=" postcode)
        {:handler (fn [body]
                    (let [map    (:leaflet-map @cursor)
                          latlng (-> body (get-in ["results"]) first (get-in ["geometry"]) (get-in ["location"]))]
                      (.panTo map (clj->js {:lat (js/parseFloat (get-in latlng ["lat"]))
                                            :lng (js/parseFloat (get-in latlng ["lng"]))}))))})))

(defn drop-pin 
  "Drop pin on click and removes it when it's clicked again."
  [owner map latlng]
  (let [marker (-> (.addTo (.marker js/L (clj->js latlng)) map))
        pin-chan (om/get-state owner [:pin-chan])]
    (put! pin-chan {:action :put :coordinates latlng})

    (.on marker "click" (fn [e] (.removeLayer map marker)
                          (put! pin-chan {:action :remove})))))

(defn panel-component
  [cursor owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [pin-chan (om/get-state owner [:pin-chan])]
        (go (while true
              (let [{:keys [action coordinates]} (<! pin-chan)]
                (if (= action :put)
                  (om/update! cursor [:coordinates] coordinates)
                  (om/update! cursor [:coordinates] nil)))))))
    om/IRender
    (render [_]
      (let [event-chan (om/get-state owner [:event-chan])]
        (html
         [:div {:id "panel"}  
          [:h3 "Postcode lookup"]
          (om/build forms/input-box cursor
                    {:init-state {:event-chan event-chan}
                     :opts {:default-value "Krakow"}})
          (om/build coordinates-component (:coordinates cursor))])))))

(defn map-component
  [cursor owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [event-chan (om/get-state owner [:event-chan])]
        (go (while true
              (let [v (<! event-chan)]
                (pan-to-postcode cursor owner v))))))
    om/IRender
    (render [this]
      (html
       [:div {:id "map"}]))
    om/IDidMount
    (did-mount [this]
      (let [node (om/get-node owner)
            {:keys [leaflet-map] :as map} (create-map (:map cursor) node)
            loc {:lng (get-in cursor [:map :lng])
                 :lat (get-in cursor [:map :lat])}]
        (.on leaflet-map "click" (fn [e]
                                   (let [latlng (.-latlng e)]
                                     (drop-pin owner leaflet-map latlng))))
        (.panTo leaflet-map (clj->js loc))
        (om/update! cursor :leaflet-map leaflet-map)))))

(defn geocoded-map
  [cursor owner]
  (reify
    om/IInitState
    (init-state [_]
      {:chans {:event-chan (chan (sliding-buffer 1))
               :pin-chan (chan (sliding-buffer 1))}})
    om/IRenderState
    (render-state [_ {:keys [chans]}]
      (html
       [:div
        (om/build map-component (:map cursor) {:init-state chans})
        (om/build panel-component (:panel cursor) {:init-state chans})]))))


(om/root geocoded-map app-model {:target (. js/document (getElementById "app"))})
