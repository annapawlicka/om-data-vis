(ns examples.simple-chart.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [mrhyde.core :as mrhyde]  
            [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]))

(enable-console-print!)
(def dimple (this-as ct (aget ct "dimple")))

(mrhyde/bootstrap)

(def app-model
  (atom {:devices [{:name "External temperature" :id "01"}
                   {:name "External humidity" :id "02"}]
         :chart {:selected nil
                 :measurements [{:id "01" :type "External temperature"  :timestamp "01/01/2011" :value 0.8}
                                {:id "01" :type "External temperature" :timestamp "01/02/2011"  :value 0.9}
                                {:id "01" :type "External temperature" :timestamp "01/03/2011" :value 0.8}
                                {:id "01" :type "External temperature" :timestamp "01/04/2011"  :value 0.75}
                                {:id "01" :type "External temperature" :timestamp "01/05/2011" :value 0.65}
                                {:id "02" :type "External humidity" :timestamp "01/01/2011" :value 6}
                                {:id "02" :type "External humidity" :timestamp "01/02/2011" :value 10}
                                {:id "02" :type "External humidity" :timestamp "01/03/2011" :value 12}
                                {:id "02" :type "External humidity" :timestmap "01/04/2011" :value 15}
                                {:id "02" :type "External humidity" :timestamp "01/05/2011" :value 18}]}}))

;;;;;;;;;;; Component 1:  Form containing list of devices that can be plotted ;;;;;;;;;;

(defn form-row [selection]
  (fn [the-item owner]
    (om/component
     (let [{:keys [id name]} the-item]
       (prn id name)
       (dom/tr nil
               (dom/td nil (dom/input #js {:type "radio"
                                           :name "type" 
                                           :value name 
                                           :onChange (fn [e]
                                                       (put! selection {:id id}))}))
               (dom/td nil id)
               (dom/td nil name))))))

(defn device-form
  [cursor owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [clicked]}]
      (dom/div nil
               (dom/table #js {:cellSpacing "10"}
                          (dom/thead nil (dom/tr nil
                                                 (dom/th nil "Select")
                                                 (dom/th nil "ID")
                                                 (dom/th nil "Name")))
                          (apply dom/tbody nil
                                 (om/build-all (form-row clicked) cursor)))))))

;;;;;;;;;;;;; Component 2: Chart ;;;;;;;;;;;;;;;;


(defn- draw-chart [cursor]
  (let [Chart        (.-chart dimple)
        svg          (.newSvg dimple "#chart" "100%" 600)
        selected     (get-in cursor [:selected])
        data         (filter #(= (:id %) selected) (get-in cursor [:measurements]))
        dimple-chart (.setBounds (Chart. svg) "5%" "15%" "80%" "50%")
        x            (.addCategoryAxis dimple-chart "x" "timestamp")
        y            (.addMeasureAxis dimple-chart "y" "value")
        s            (.addSeries dimple-chart "id" js/dimple.plot.line (clj->js [x y]))]
    (aset s "data" (clj->js data))
    (.addLegend dimple-chart "5%" "10%" "20%" "10%" "right")
    (.draw dimple-chart)))

(defn chart-figure [cursor owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [clicked-items (om/get-state owner [:clicked])]
        (go (while true
              (let [sel (<! clicked-items)
                    id              (str (get sel :id))]
                (om/update! cursor [:selected] id))))))
    om/IRender
    (render [_]
      (dom/div nil (dom/div #js {:id "chart" :width "100%" :height 600})))
    om/IDidUpdate
    (did-update [_ _ _]
      (let [n (.getElementById js/document "chart")]
        (while (.hasChildNodes n)
          (.removeChild n (.-lastChild n))))
      (draw-chart cursor))))

(defn simple-chart [cursor owner]
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

(om/root simple-chart app-model
  {:target (.getElementById js/document "app")})
