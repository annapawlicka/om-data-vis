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

;;;;;;;;;;;;; Component 2: Chart ;;;;;;;;;;;;;;;;

(defn- draw-chart [cursor {:keys [div bounds x-axis y-axis plot]}]
  (let [Chart        (.-chart js/dimple)
        svg          (.newSvg js/dimple (:name div) (:width div) (:height div))
        data         (get-in cursor [:data])
        dimple-chart (.setBounds (Chart. svg) (:x bounds) (:y bounds) (:width bounds) (:height bounds))
        x            (.addCategoryAxis dimple-chart "x" x-axis)
        y            (.addMeasureAxis dimple-chart "y" y-axis)
        s            (.addSeries dimple-chart nil plot (clj->js [x y]))]
    (aset s "data" (clj->js data))
    (.addLegend dimple-chart "5%" "10%" "20%" "10%" "right")
    (.draw dimple-chart)))


(defn chart-figure [cursor owner opts]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [event-chan (om/get-state owner [:event-chan])
            event-fn   (:event-fn opts)]
        (go (while true
              (let [v (<! event-chan)]
                (event-fn cursor owner v))))))
    om/IRender
    (render [_]
      (dom/div nil (dom/div #js {:id "chart" :width "100%" :height 600})))
    om/IDidUpdate
    (did-update [_ _ _]
      (let [n (.getElementById js/document "chart")]
        (while (.hasChildNodes n)
          (.removeChild n (.-lastChild n))))
      (when (:data cursor)
        (draw-chart cursor (:chart opts))))))

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
               (om/build chart-figure (:chart cursor) {:init-state chans
                                                       :opts {:event-fn get-all-artists
                                                              :chart {:div {:name "#chart" :width "100%" :height 600}
                                                                      :bounds {:x "5%" :y "15%" :width "80%" :height "50%"}
                                                                      :x-axis "name"
                                                                      :y-axis "playcount"
                                                                      :plot js/dimple.plot.bar}}})))))



(om/root lastfm-chart app-model {:target (.getElementById js/document "app")
                                 :shared {:api-root "http://ws.audioscrobbler.com/2.0/"}})
