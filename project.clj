(defproject om-data-vis "0.1.0-SNAPSHOT"
  :description "Data visualisation Om components"
  :url "http://github.com/apawlicka/om-data-vis"
  :license {:name "Eclipse"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :jvm-opts ^:replace ["-Xms512m" "-Xmx512m" "-server"]

  :source-paths  ["src" "src-cljs"]
  :ring {:handler om-data-vis.handler/app}

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2227" :scope "provided"]

                 ;; Om components
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha" :scope "provided"]
                 [om "0.7.0"]
                 [sablono "0.2.20"]
                 [cljs-ajax "0.2.6"]

                 ;; Routes and resources
                 [liberator "0.12.0"]
                 [compojure "1.1.8"]
                 [org.clojure/data.json "0.2.5"]

                 [org.clojure/tools.reader "0.8.3"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]
            [lein-ring "0.8.10"]]

  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]}}


  :cljsbuild {
    :builds [;; examples
             {:id "chart-http"
              :source-paths ["src-cljs" "examples/chart-http/src"]
              :compiler {
                :output-to "examples/chart-http/chart_http.js"
                :output-dir "examples/chart-http/out"
                :source-map true
                :optimizations :none}}
             {:id "simple-map"
              :source-paths ["src-cljs" "examples/simple-map/src"]
              :compiler {
                         :output-to "examples/simple-map/simple_map.js"
                         :output-dir "examples/simple-map/out"
                         :source-map true
                         :optimizations :none}}
              {:id "lastfm-chart"
               :source-paths ["src-cljs" "examples/lastfm-chart/src"]
               :compiler {
                          :output-to "examples/lastfm-chart/lastfm_chart.js"
                          :output-dir "examples/lastfm-chart/out"
                          :source-map true
                          :optimizations :none}}
              {:id "draggable-widget"
               :source-paths ["src-cljs" "examples/draggable-widget/src"]
               :compiler {
                          :output-to "examples/draggable-widget/draggable_widget.js"
                          :output-dir "examples/draggable-widget/out"
                          :source-map true
                          :optimizations :none}}]})
