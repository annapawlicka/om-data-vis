(ns om-data-vis.forms
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]
            [ajax.core :refer (GET)]))

(defn input-box [cursor owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [event-chan]}]
      (dom/div nil
               (dom/input #js {:type "text"
                               :onChange (fn [e] (om/set-state! owner :value (.-value (.-target e))))
                               :onKeyPress (fn [e] (when (= (.-keyCode e) 13)
                                                     (let [value (om/get-state owner :value)]
                                                       (prn value)
                                                       (put! event-chan value))))})
               (dom/button #js {:onClick (fn [e] 
                                           (put! event-chan (om/get-state owner :value)))} "Go")))))
