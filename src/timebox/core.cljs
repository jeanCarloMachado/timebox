(ns timebox.core
    (:require [reagent.core :as r :refer [atom]]))

(enable-console-print!)

(println "console.log")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))


(def timer-running (atom false))


(defn timer-component []
 (let [seconds-elapsed (atom  0)]
   (fn []
     (js/setTimeout #(swap! seconds-elapsed inc) 1000)
     [:div
      @seconds-elapsed
      ]
     )
   )
  )

(defn root []

  [:div
   [:input {:type "button" :value (if @timer-running "Stop" "Start") :on-click #(swap! timer-running not)}]
   [:div (when @timer-running [timer-component])]
   [:input {:type "text" :value "Timebox description"}]
   ])

(r/render-component [root]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
