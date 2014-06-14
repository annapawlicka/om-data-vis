(ns examples.chart-http.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [mrhyde.core :as mrhyde]  
            [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]
            [ajax.core :refer (GET POST)]))

(enable-console-print!)
(def dimple (this-as ct (aget ct "dimple")))

(mrhyde/bootstrap)


(def app-model
  (atom {:devices {:all []}
         :chart {:selected nil
                 :measurements nil}}))

;;;;;;;;;;; Component 1:  Form containing list of devices that can be plotted ;;;;;;;;;;

(defn form-row [selection]
  (fn [the-item owner]
    (om/component
     (let [{:keys [id type description unit]} the-item]
       (dom/tr nil
               (dom/td nil (dom/input #js {:type "radio"
                                           :name "type" 
                                           :value name 
                                           :onChange (fn [e]
                                                       (put! selection {:id id
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
    (render-state [_ {:keys [clicked]}]
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
                                   (om/build-all (form-row clicked) devices))))))))

;;;;;;;;;;;;; Component 2: Chart ;;;;;;;;;;;;;;;;

(defn- draw-chart [cursor]
  (let [Chart        (.-chart dimple)
        svg          (.newSvg dimple "#chart" "100%" 600)
        selected     (get-in cursor [:selected])
        data         (get-in cursor [:measurements])
        dimple-chart (.setBounds (Chart. svg) "5%" "15%" "80%" "50%")
        x            (.addCategoryAxis dimple-chart "x" "timestamp")
        y            (.addMeasureAxis dimple-chart "y" "value")
        s            (.addSeries dimple-chart "type" js/dimple.plot.line (clj->js [x y]))]
    (aset s "data" (clj->js data))
    (.addLegend dimple-chart "5%" "10%" "20%" "10%" "right")
    (.draw dimple-chart)))

(defn chart-figure [cursor owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [clicked-items (om/get-state owner [:clicked])
            host          (:url (om/get-shared owner))]
        (go (while true
              (let [sel (<! clicked-items)
                    {:keys [id type]} sel
                    url (str host "device/" id "/type/" type "/measurements/")]
                (GET url {:handler #(om/update! cursor [:measurements] %)})
                (om/update! cursor [:selected] type))))))
    om/IRender
    (render [_]
      (dom/div nil (dom/div #js {:id "chart" :width "100%" :height 600})))
    om/IDidUpdate
    (did-update [_ _ _]
      (let [n (.getElementById js/document "chart")]
        (while (.hasChildNodes n)
          (.removeChild n (.-lastChild n))))
      (draw-chart cursor))))

(defn chart-http [cursor owner]
  (reify
    om/IInitState
    (init-state [_]
      {:chans {:clicked (chan (sliding-buffer 1))}})
    om/IRenderState
    (render-state [_ {:keys [chans]}]
      (dom/div nil
           (dom/h3 #js {:key "head"} (str "Metering data"))
           ;; Builds table with form components for selecting devices
           (dom/div #js {:id "device-form"}
                (om/build device-form (:devices cursor)
                    {:init-state chans}))
           ;; Builds chart component
           (om/build chart-figure (:chart cursor) {:init-state chans})))))

(om/root chart-http app-model
  {:target (.getElementById js/document "app")
   :shared {:url "http://localhost:3000/"}})
