(ns om-data-vis.forms
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]
            [ajax.core :refer (GET)]
            [sablono.core :as html :refer-macros [html]]))

;; It's probably an overkill, but hey! multimethods :-)
(defmulti input-box (fn [cursor owner opts] (not (nil? (:default-value opts)))))

(defmethod input-box true
  [cursor owner {:keys [default-value]}]
  (reify
    om/IRenderState
    (render-state [_ {:keys [event-chan]}]
      (html
       [:div {:class "form-inline" :role "form"}
        [:div {:class "form-group"}
         [:input {:type "text"
                  :default-value default-value
                  :class "form-control"
                  :style {:width "100%"}
                  :on-change (fn [e] (om/set-state! owner :value (.-value (.-target e))))
                  :on-key-press (fn [e] (when (= (.-keyCode e) 13)
                                        (let [value (om/get-state owner :value)]
                                          (when value
                                            (put! event-chan value)))))}]]
        [:button {:type "button" :class "btn btn-primary"
                  :on-click (fn [e] 
                             (let [value (om/get-state owner :value)]
                               (when value
                                 (put! event-chan value))))} "Go"]]))))

(defmethod input-box false
  [cursor owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [event-chan]}]
      (html
       [:div {:class "form-inline" :role "form"}
        [:div {:class "form-group"}
         [:input {:type "text"
                  :class "form-control"
                  :style {:width "100%"}
                  :on-change (fn [e] (om/set-state! owner :value (.-value (.-target e))))
                  :on-key-press (fn [e] (when (= (.-keyCode e) 13)
                                        (let [value (om/get-state owner :value)]
                                          (when value
                                            (put! event-chan value)))))}]]
        [:button {:type "button" :class "btn btn-primary"
                  :on-click (fn [e] 
                             (let [value (om/get-state owner :value)]
                               (when value
                                 (put! event-chan value))))} "Go"]]))))
