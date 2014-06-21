(ns examples.lastfm-chart.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]
            [ajax.core :refer (GET)]
            [cljs.reader :as reader]
            [examples.lastfm-chart.api :refer (api-key)]
            [om-data-vis.chart :as chart]))


(enable-console-print!)

(def app-model
 (atom {:username-box {:username ""}
        :chart {:data []}}))

(defn get-all-artists [cursor owner username]
  (let [api-root (:api-root (om/get-shared owner))
        url      (str api-root "?method=user.gettopartists&user=" username "&api_key=" api-key "&format=json")]
    (GET url {:handler #(om/update! cursor [:data] (get-in % ["topartists" "artist"]))})))

(defn username-box [cursor owner]
  (reify
    om/IInitState
    (init-state [_]
      {:initialUsername "anttu_of_bodom"})
    om/IWillMount
    (will-mount [_]
      (om/set-state! owner :username (om/get-state owner :initialUsername)))
    om/IRenderState
    (render-state [_ {:keys [state event-chan username]}]
      (prn "state: " state username)
      (dom/div nil
               (dom/input #js {:type "text"
                               :defaultValue username
                               :onChange (fn [e] (om/set-state! owner :username (.-value (.-target e))))
                               :onKeyPress (fn [e] (when (= (.-keyCode e) 13)
                                                     (let [username (om/get-state owner :username)]
                                                          (om/update! cursor [:username] username)
                                                          (put! event-chan username))))})
               (dom/button #js {:onClick (fn [e] 
                                           (put! event-chan (om/get-state owner :username)))} "Go")))))

;;;;;;;;;;;;; Entire Application View ;;;;;;;;;;;;;

(defn lastfm-chart [cursor owner]
  (reify
    om/IInitState
    (init-state [_]
      {:chans {:event-chan (chan (sliding-buffer 1))}})
    om/IRenderState
    (render-state [_ {:keys [chans]}]
      (dom/div nil
               (dom/h3 nil "Last.fm chart")
               (om/build username-box (:username-box cursor) {:init-state chans})
               (om/build chart/chart-figure (:chart cursor) {:init-state chans
                                                       :opts {:event-fn get-all-artists
                                                              :chart {:div {:id "chart" :width "100%" :height 600}
                                                                      :bounds {:x "5%" :y "15%" :width "80%" :height "50%"}
                                                                      :x-axis "name"
                                                                      :y-axis "playcount"
                                                                      :plot js/dimple.plot.bar}}})))))



(om/root lastfm-chart app-model {:target (.getElementById js/document "app")
                                 :shared {:api-root "http://ws.audioscrobbler.com/2.0/"}})
