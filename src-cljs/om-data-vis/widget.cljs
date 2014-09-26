(ns om-data-vis.widget
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [cljs.core.async :as async :refer [<! chan put! sliding-buffer close!]]
            [sablono.core :as html :refer-macros [html]]
            [goog.events :as events]))

(defn by-id [id]
  (.getElementById js/document id))

(defn handle-drag-event [cursor owner evt-type e]
  (when (= evt-type :down)
    (om/set-state! owner :pressed true))
  (when (= evt-type :up)
    (om/set-state! owner :pressed false))
  (when (and (= evt-type :move) (om/get-state owner :pressed))
    (om/update! cursor :position {:top (.-clientY e) :left (.-clientX e)})))


(defn draggable [cursor owner {:keys [build-fn id]}]
  (reify
    om/IInitState
    (init-state [_]
      {:mouse-chan (chan (sliding-buffer 1000))
       :pressed false})
    om/IWillMount
    (will-mount [_]
      (let [mouse-chan (om/get-state owner :mouse-chan)]
        (go-loop []
          (let [[evt-type e] (<! mouse-chan)]
            (handle-drag-event cursor owner evt-type e))
          (recur))))
    om/IDidMount
    (did-mount [_]
      (let [node       (by-id id)
            mouse-chan (om/get-state owner :mouse-chan)]
        (events/listen node "mousemove" #(put! mouse-chan [:move %]))
        (events/listen node "mousedown" #(put! mouse-chan [:down %]))
        (events/listen node "mouseup" #(put! mouse-chan [:up %]))))
    om/IRenderState
    (render-state [_ {:keys [mouse-chan]}]
      (html
       (let [{:keys [top left]} (:position cursor)]
         [:div {:id id
                :style {:top (str (- top 40) "px") :left (str (- left 40) "px")
                        :position "absolute" :z-index 100}}
          build-fn])))))
