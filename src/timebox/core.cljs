(ns timebox.core
    (:require [react-dom]))

(enable-console-print!)

(println "This text is printed from src/timebox/core.cljs. Go ahead and edit it and see reloading in action.")

(.render js/ReactDOM
  (.createElement js/React "h2" nil "Hello, React 22!")
  (.getElementById js/document "app"))
