(ns examples.draggable-widget
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [cljs.core.async :refer [<! chan put!]]
            [ajax.core :refer (GET)]
            [om-data-vis.widget :as w]
            [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(def app-model
  (atom {:text "Drag me!"}))

;;;;;;;;;;;;; Entire application view ;;;;;;;;;;;;;;;

(defn draggable-widget [cursor owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      (html
       [:div {:class "container"}
        (om/build w/widget (:text cursor))]))))

(om/root draggable-widget app-model
  {:target (.getElementById js/document "app")})
