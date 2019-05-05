(ns timebox.core
    (:require [reagent.core :as r :refer [atom]]))

(enable-console-print!)

(println "console.log")

;; define your app data so that it doesn't get over-written on reload

;;(defonce app-state (atom {:text "Hello world!"}))
(defonce seconds-counter (atom 0))
(defonce timer-running (atom false))
;the user given timebox
(defonce timebox-in-minutes (atom 0))
(defonce time-updater (js/setInterval #(swap! seconds-counter inc) 1000))

; ---



(defn create-notification [title msg]
  (js/Notification. title #js {:body msg}))

(defn show-desktop-notification [title msg]
  (if (= js/Notification.permission "granted")
    (create-notification title msg)
    (.requestPermission js/Notification (fn [permission]
                                          (if (= permission "granted")
                                            (create-notification title msg))))))

(. (js/Audio. "bell.mp3") (play))

(defn timer-start []
  (reset! timer-running true)
  (reset! seconds-counter 0)
  )
(def timer-stop #(reset! timer-running false))


(def  minutes_to_seconds #(* %1 60))

(defn percentage_ellapsed [seconds-ellapsed timebox-in-minutes]
  (int (/ (* 100 seconds-ellapsed) (minutes_to_seconds timebox-in-minutes)))
  )

(defn change_timebox [e]
 (reset! timebox-in-minutes (.. e -target -value))
 (timer-stop)
)

(defn manage_end [percentage_ellapsed]
 (if (> percentage_ellapsed 100) (show-desktop-notification "Timebox is over" ""))
 percentage_ellapsed
)

(defn style_input []
  {:padding "10px" :min-width "200px"}
)

(defn button_style []
  {:min-height "25px" :min-width "60px" :width "150px" :height "50px" :margin "25px"}
)

(defn root []
  [:div {:style {:display "flex" :justify-content "center" :align-items "center" :height "100%"}}
   [:div {:style {:background "#cccccc" :min-height "400px" :min-width "400px" :display "flex" :justify-content "center" :align-items "center" :flex-direction "column" }}
   [:input {:type "text" :placeholder "Timebox size in minutes" :value @timebox-in-minutes :on-change change_timebox :style (style_input) } ]
   (when (not @timer-running) [:input {:style (button_style) :type "button" :value "Start" :on-click timer-start }])
   (when (= true @timer-running) [:input {:style (button_style) :type "button" :value "Stop" :on-click timer-stop }])
   (when (= true @timer-running) [:p (str "Percentage ellapsed: " (manage_end (percentage_ellapsed @seconds-counter @timebox-in-minutes) ) " %")])
   ]
   ])

(r/render-component [root]
  (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
