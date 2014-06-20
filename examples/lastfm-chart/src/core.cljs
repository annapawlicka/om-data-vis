(ns examples.lastfm-chart.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]
            [ajax.core :refer (GET)]
            [cljs.reader :as reader]
            [examples.lastfm-chart.api :refer (api-key)]))


(enable-console-print!)

(def app-model
 (atom {:username-box {:username ""}
        :chart {:artists []}}))

(defn get-all-artists [cursor owner username]
  (let [api-root (:api-root (om/get-shared owner))
        api-key  api-key
        url      (str api-root "?method=user.gettopartists&user=" username "&api_key=" api-key "&format=json")]
    (GET url {:handler #(om/update! cursor [:artists] (get-in % ["topartists" "artist"]))})))

(defn username-box [cursor owner]
  (reify
    om/IInitState
    (init-state [_]
      {:initialUsername "anttu_of_bodom"})
    om/IWillMount
    (will-mount [_]
      (om/set-state! owner :username (om/get-state owner :initialUsername)))
    om/IRenderState
    (render-state [_ {:keys [state typed username]}]
      (prn "state: " state username)
      (dom/div nil
               (dom/input #js {:type "text"
                               :defaultValue username
                               :onChange (fn [e] (om/set-state! owner :username (.-value (.-target e))))
                               :onKeyPress (fn [e] (when (= (.-keyCode e) 13)
                                                     (let [username (om/get-state owner :username)]
                                                          (om/update! cursor [:username] username)
                                                          (put! typed {:username username}))))})
               (dom/button #js {:onClick (fn [e] 
                                           (put! typed {:username (om/get-state owner :username)}))} "Go")))))

;;;;;;;;;;;;; Component 2: Chart ;;;;;;;;;;;;;;;;

(defn- draw-chart [cursor]
  (let [Chart        (.-chart js/dimple)
        svg          (.newSvg js/dimple "#chart" "100%" 600)
        selected     (get-in cursor [:username])
        data         (get-in cursor [:artists])
        dimple-chart (.setBounds (Chart. svg) "5%" "15%" "80%" "50%")
        x            (.addCategoryAxis dimple-chart "x" "name")
        y            (.addMeasureAxis dimple-chart "y" "playcount")
        s            (.addSeries dimple-chart nil js/dimple.plot.bar (clj->js [x y]))]
    (aset s "data" (clj->js data))
    (.addLegend dimple-chart "5%" "10%" "20%" "10%" "right")
    (.draw dimple-chart)))


(defn chart-figure [cursor owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [typed-username (om/get-state owner [:typed])]
        (go (while true
              (let [sel (<! typed-username)
                    {:keys [username]} sel]
                (get-all-artists cursor owner username))))))
    om/IRender
    (render [_]
      (dom/div nil (dom/div #js {:id "chart" :width "100%" :height 600})))
    om/IDidUpdate
    (did-update [_ _ _]
      (let [n (.getElementById js/document "chart")]
        (while (.hasChildNodes n)
          (.removeChild n (.-lastChild n))))
      (when (:artists cursor)
        (draw-chart cursor)))))

(defn lastfm-chart [cursor owner]
  (reify
    om/IInitState
    (init-state [_]
      {:chans {:typed (chan (sliding-buffer 1))}})
    om/IRenderState
    (render-state [_ {:keys [chans]}]
      (dom/div nil
               (dom/h3 nil "Last.fm chart")
               (om/build username-box (:username-box cursor) {:init-state chans})
               (om/build chart-figure (:chart cursor) {:init-state chans})))))



(om/root lastfm-chart app-model {:target (.getElementById js/document "app")
                                 :shared {:api-root "http://ws.audioscrobbler.com/2.0/"}})
