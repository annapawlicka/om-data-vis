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
    (om/set-state! owner :mouse {:offset-top (.-offsetY e)
                                 :offset-left (.-offsetX e)
                                 :pressed true}))
  (when (= evt-type :up)
    (om/set-state! owner [:mouse :pressed] false))
  (when (and (= evt-type :move) (om/get-state owner [:mouse :pressed]))
    (let [{:keys [offset-top offset-left]} (om/get-state owner :mouse)]
      (om/update! cursor :position {:top (- (.-clientY e) offset-top)
                                    :left (- (.-clientX e) offset-left)}))))

(defn draggable [cursor owner {:keys [build-fn id]}]
  (reify
    om/IInitState
    (init-state [_]
      {:mouse-chan (chan (sliding-buffer 1000))
       :mouse {:offset-top 0 :offset-left 0 :pressed false}})
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
                :style {:top (str top "px") :left (str left "px")
                        :position "absolute" :z-index 100}}
          build-fn])))))
