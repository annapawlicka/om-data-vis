(ns examples.draggable-widget.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [cljs.core.async :refer [<! chan put!]]
            [ajax.core :refer (GET)]
            [om-data-vis.widget :as w]
            [sablono.core :as html :refer-macros [html]]))

(def app-model
  (atom {:draggable-box {:position {:top 40 :left 40} :text "Drag me!"}
         :draggable-circle {:position {:top 150 :left 150} :text "Drag me too!"}}))

(defn box [text]
  [:div.disable-select {:style {:width "80px" :height "80px" :border "solid" :color "black"
                                :display "inline-block"}} text])

(defn circle [text]
  [:div.disable-select {:style {:width "100px" :height "100px"
                                :border-radius "50%" :border "solid" :color "black"
                                :padding-top "30px"
                                :text-align "center"
                                :display "inline-block"}} text])

;;;;;;;;;;;;; Entire application view ;;;;;;;;;;;;;;;

(defn draggable-widget [cursor owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      (html
       [:div {:class "container"}
        (om/build w/draggable (:draggable-box cursor)
                  {:state {:id "box-widget"
                           :figure (box (-> cursor
                                            :draggable-box
                                            :text))}})
        (om/build w/draggable (:draggable-circle cursor)
                  {:state
                   {:id "circle-widget"
                    :figure (circle
                             (-> cursor :draggable-circle
                                 :text))}})]))))

(om/root draggable-widget app-model
         {:target (.getElementById js/document "app")})
