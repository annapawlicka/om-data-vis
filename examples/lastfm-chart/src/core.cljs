(ns examples.lastfm-chart.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om  :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]
            [ajax.core :refer (GET)]
            [cljs.reader :as reader]
            [om-data-vis.chart :as chart]
            [om-data-vis.forms :as forms]
            [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(def app-model
 (atom {:username-box {:username ""}
        :chart {:data []
                :api-key ""}}))

(defn get-all-artists [cursor owner username]
  (let [api-root (:api-root (om/get-shared owner))
        api-key  (:api-key @cursor)
        url      (str api-root "?method=user.gettopartists&user=" username "&api_key=" api-key "&format=json")]
    (GET url {:handler #(om/update! cursor [:data] (get-in % ["topartists" "artist"]))})))

;;;;;;;;;;;;; Entire Application View ;;;;;;;;;;;;;

(defn lastfm-chart [cursor owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [url (:api-key (om/get-shared owner))]
        (GET url {:handler #(om/update! cursor [:chart :api-key] (:api-key %))})))
    om/IInitState
    (init-state [_]
      {:chans {:event-chan (chan (sliding-buffer 1))}})
    om/IRenderState
    (render-state [_ {:keys [chans]}]
      (html
       [:div {:class "container"}
        [:h3 "Last.fm chart"]
        (om/build forms/input-box (:username-box cursor) {:init-state chans})
        [:div {:class "well" :style {:width "100%" :height 600}}
         (om/build chart/chart-figure (:chart cursor) {:init-state chans
                                                       :opts {:event-fn get-all-artists
                                                              :chart {:div {:id "chart" :width "100%" :height 600}
                                                                      :bounds {:x "5%" :y "15%" :width "80%" :height "50%"}
                                                                      :x-axis "name"
                                                                      :y-axis "playcount"
                                                                      :plot js/dimple.plot.bar}}})]]))))



(om/root lastfm-chart app-model {:target (.getElementById js/document "app")
                                 :shared {:api-root "http://ws.audioscrobbler.com/2.0/"
                                          :api-key "http://localhost:3000/apikey/"}})
