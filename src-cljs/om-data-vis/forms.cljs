(ns om-data-vis.forms
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]
            [ajax.core :refer (GET)]))

(defn input-box [cursor owner]
  (reify
    om/IInitState
    (init-state [_]
      {:initialValue "foo"})
    om/IWillMount
    (will-mount [_]
      (om/set-state! owner :value (om/get-state owner :initialValue)))
    om/IRenderState
    (render-state [_ {:keys [event-chan]}]
      (dom/div #js {:className "form-inline" :role "form"}
               (dom/div #js {:className "form-group"}
                        (dom/input #js {:type "text"
                                        :className "form-control"
                                        :style #js {:width "100%"}
                                        :onChange (fn [e] (om/set-state! owner :value (.-value (.-target e))))
                                        :onKeyPress (fn [e] (when (= (.-keyCode e) 13)
                                                              (let [value (om/get-state owner :value)]
                                                                (put! event-chan value))))}))
               (dom/button #js {:type "button" :className "btn btn-primary"
                                :onClick (fn [e] 
                                           (let [value (om/get-state owner :value)]
                                             (put! event-chan value)))} "Go")))))
