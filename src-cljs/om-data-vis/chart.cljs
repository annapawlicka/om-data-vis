(ns om-data-vis.chart
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]
            [ajax.core :refer (GET)]
            [sablono.core :as html :refer-macros [html]]))

(defn- draw-chart [cursor {:keys [div bounds x-axis y-axis plot]}]
  (let [{:keys [id width height]} div
        Chart        (.-chart js/dimple)
        svg          (.newSvg js/dimple (str "#" id) width height)
        data         (get-in cursor [:data])
        dimple-chart (.setBounds (Chart. svg) (:x bounds) (:y bounds) (:width bounds) (:height bounds))
        x            (.addCategoryAxis dimple-chart "x" x-axis)
        y            (.addMeasureAxis dimple-chart "y" y-axis)
        s            (.addSeries dimple-chart nil plot (clj->js [x y]))]
    (aset s "data" (clj->js data))
    (.addLegend dimple-chart "5%" "10%" "20%" "10%" "right")
    (.draw dimple-chart)
    (.attr (.selectAll (.-shapes x) "text") "transform" "rotate(45,0,12.6015625) translate(5, 0)")))

(defn chart-figure [cursor owner {:keys [chart] :as opts}]
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
      (let [{:keys [id width height]} (:div chart)]
        (html
         [:div {:id id :width width :height height}])))
    om/IDidUpdate
    (did-update [_ _ _]
      (let [n (.getElementById js/document "chart")]
        (while (.hasChildNodes n)
          (.removeChild n (.-lastChild n))))
      (when (seq (:data cursor))
        (draw-chart cursor chart)))))
