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


(defn button-style []
  {:min-height "25px" :min-width "60px"}
)


(defn root []
  [:div {:style {:display "flex" :justify-content "center" :align-items "center" :height "100%"}}
   [:div {:style {:background "#cccccc" :min-height "400px" :min-width "400px"}}
   (when (not @timer-running) [:input {:style (button-style) :type "button" :value "Start" :on-click timer-start }])
   (when (= true @timer-running) [:input {:style (button-style) :type "button" :value "Stop" :on-click timer-stop }])
   (when (= true @timer-running) [:p @seconds-counter])
   ]
   ])

(r/render-component [root]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
