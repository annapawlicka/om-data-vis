(ns examples.chart-http.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [cljs.core.async :refer [<! chan put!]]
            [ajax.core :refer (GET)]
            [om-data-vis.chart :as chart]
            [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(def app-model
  (atom {:devices {:all []}
         :chart {:data []}}))

(defn get-measurements [cursor owner message]
  (let [host (:url (om/get-shared owner))
        {:keys [id type]} message
        url (str host "device/" id "/type/" type "/measurements/")]
    (GET url {:handler #(om/update! cursor [:data] %)})))

;;;;;;;;;;; Component 1:  Form containing list of devices that can be plotted ;;;;;;;;;;

(defn form-row [event-chan]
  (fn [the-item owner]
    (om/component
     (let [{:keys [id type description unit]} the-item]
       (html
        [:tr 
         [:td [:input {:type "radio"
                       :name "type" 
                       :value name 
                       :on-change (fn [e]
                                   (put! event-chan {:id id
                                                     :type type}))}]]
         [:td id]
         [:td type]
         [:td description]
         [:td unit]])))))

(defn device-form
  [cursor owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [host (:url (om/get-shared owner))
            url (str host "devices/")]
        (GET url {:handler #(om/update! cursor [:all] %)})))
    om/IRenderState
    (render-state [_ {:keys [event-chan]}]
      (let [devices (:all cursor)]
        (html
         [:div
          [:table {:class "table table-striped table-bordered table-condensed" :style {:width "100%"}}
           [:thead [:tr 
                    [:th "Select"]
                    [:th "ID"]
                    [:th "Type"]
                    [:th "Description"]
                    [:th "Unit"]]]
           [:tbody (om/build-all (form-row event-chan) devices {:key :id})]]])))))

;;;;;;;;;;;;; Entire application view ;;;;;;;;;;;;;;;

(defn chart-http [cursor owner]
  (reify
    om/IInitState
    (init-state [_]
      {:chans {:event-chan (chan)}})
    om/IRenderState
    (render-state [_ {:keys [chans]}]
      (html
       [:div {:class "container"}
        [:h3 {:key "head"} (str "Metering data")]
        ;; Builds table with form components for selecting devices
        (om/build device-form (:devices cursor)
                  {:init-state chans})
        ;; Builds chart component
        [:div {:class "well" :style {:width "100%" :height 600}}
         (om/build chart/chart-figure 
                   (:chart cursor) 
                   {:init-state chans
                    :opts {:event-fn get-measurements
                           :chart {:div {:id "chart" :width
                                         "100%" :height 600}
                                   :bounds {:x "5%" :y "15%" 
                                            :width "80%" :height "50%"}
                                   :x-axis "timestamp"
                                   :y-axis "value"
                                   :plot js/dimple.plot.line}}})]]))))

(om/root chart-http app-model
  {:target (.getElementById js/document "app")
   :shared {:url "http://localhost:3000/"}})
