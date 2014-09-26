(ns om.dom
  (:refer-clojure :exclude [map meta time])
  (:require-macros [om.dom :as dom]))

(dom/gen-react-dom-fns)

(defn wrap-form-element [ctor display-name]
  (js/React.createClass
    #js
    {:getDisplayName
     (fn [] display-name)
     :getInitialState
     (fn []
       (this-as this
         #js {:value (aget (.-props this) "value")}))
     :onChange
     (fn [e]
       (this-as this
         (let [handler (aget (.-props this) "onChange")]
           (when-not (nil? handler)
             (handler e)
             (.setState this #js {:value (.. e -target -value)})))))
     :componentWillReceiveProps
     (fn [new-props]
       (this-as this
         (.setState this #js {:value (aget new-props "value")})))
     :render
     (fn []
       (this-as this
         (.transferPropsTo this
           ;; NOTE: if switch to macro we remove a closure allocation
           (ctor #js {:value (aget (.-state this) "value")
                      :onChange (aget this "onChange")
                      :children (aget (.-props this) "children")}))))}))

(def input (wrap-form-element js/React.DOM.input "input"))

(def textarea (wrap-form-element js/React.DOM.textarea "textarea"))

(def option (wrap-form-element js/React.DOM.option "option"))

(defn render
  "Equivalent to React.renderComponent"
  [component el]
  (js/React.renderComponent component el))

(defn render-to-str
  "Equivalent to React.renderComponentToString"
  [c]
  (js/React.renderComponentToString c))
