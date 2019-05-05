(ns timebox.core
    (:require [reagent.core :as r :refer [atom]]))

(enable-console-print!)

(println "console.log")

;; define your app data so that it doesn't get over-written on reload

;;(defonce app-state (atom {:text "Hello world!"}))
(defonce seconds-counter (atom 0))
(defonce timer-running (atom false))
(defonce time-updater (js/setInterval #(swap! seconds-counter inc) 1000))


; ---

(defn timer-start []
  (reset! timer-running true)
  (reset! seconds-counter 0)
  )
(def timer-stop #(reset! timer-running false))

(defn root []

  [:div
   (when (not @timer-running) [:input {:type "button" :value "Start" :on-click timer-start }])
   (when (= true @timer-running) [:input {:type "button" :value "Stop" :on-click timer-stop }])
   [:div [:p @seconds-counter]]
   ])

(r/render-component [root]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
