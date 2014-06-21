(ns examples.chart-http.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]
            [ajax.core :refer (GET)]))

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
       (dom/tr nil
               (dom/td nil (dom/input #js {:type "radio"
                                           :name "type" 
                                           :value name 
                                           :onChange (fn [e]
                                                       (put! event-chan {:id id
                                                                         :type type}))}))
               (dom/td nil id)
               (dom/td nil type)
               (dom/td nil description)
               (dom/td nil unit))))))

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
        (dom/div nil
                 (dom/table #js {:cellSpacing "10"}
                            (dom/thead nil (dom/tr nil
                                                   (dom/th nil "Select")
                                                   (dom/th nil "ID")
                                                   (dom/th nil "Type")
                                                   (dom/th nil "Description")
                                                   (dom/th nil "Unit")))
                            (apply dom/tbody nil
                                   (om/build-all (form-row event-chan) devices))))))))

;;;;;;;;;;;;; Component 2: Chart ;;;;;;;;;;;;;;;;

(defn- draw-chart [cursor {:keys [div bounds x-axis y-axis plot]}]
  (let [Chart        (.-chart js/dimple)
        svg          (.newSvg js/dimple (:name div) (:width div) (:height div))
        data         (get-in cursor [:data])
        dimple-chart (.setBounds (Chart. svg) (:x bounds) (:y bounds) (:width bounds) (:height bounds))
        x            (.addCategoryAxis dimple-chart "x" x-axis)
        y            (.addMeasureAxis dimple-chart "y" y-axis)
        s            (.addSeries dimple-chart nil plot (clj->js [x y]))]
    (aset s "data" (clj->js data))
    (.addLegend dimple-chart "5%" "10%" "20%" "10%" "right")
    (.draw dimple-chart)))

(defn chart-figure [cursor owner opts]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [event-chan (om/get-state owner [:event-chan])
            event-fn   (:event-fn opts)]
        (go (while true
              (let [v (<! event-chan)]
                (event-fn cursor owner v))))))
    om/IRender
    (render [_]
      (dom/div nil (dom/div #js {:id "chart" :width "100%" :height 600})))
    om/IDidUpdate
    (did-update [_ _ _]
      (let [n (.getElementById js/document "chart")]
        (while (.hasChildNodes n)
          (.removeChild n (.-lastChild n))))
      (when (:data cursor)
        (draw-chart cursor (:chart opts))))))

;;;;;;;;;;;;; Entire application view ;;;;;;;;;;;;;;;

(defn chart-http [cursor owner]
  (reify
    om/IInitState
    (init-state [_]
      {:chans {:event-chan (chan (sliding-buffer 1))}})
    om/IRenderState
    (render-state [_ {:keys [chans]}]
      (dom/div nil
           (dom/h3 #js {:key "head"} (str "Metering data"))
           ;; Builds table with form components for selecting devices
           (dom/div #js {:id "device-form"}
                (om/build device-form (:devices cursor)
                    {:init-state chans}))
           ;; Builds chart component
           (om/build chart-figure (:chart cursor) {:init-state chans
                                                   :opts {:event-fn get-measurements
                                                          :chart {:div {:name "#chart" :width "100%" :height 600}
                                                                  :bounds {:x "5%" :y "15%" :width "80%" :height "50%"}
                                                                  :x-axis "timestamp"
                                                                  :y-axis "value"
                                                                  :plot js/dimple.plot.line}}})))))

(om/root chart-http app-model
  {:target (.getElementById js/document "app")
   :shared {:url "http://localhost:3000/"}})
