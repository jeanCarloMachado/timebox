(ns timebox.core
    (:require [react :refer [createElement]]
              [react-dom :refer [render]]))


(def appDiv (.getElementById js/document "app"))

(render
  (createElement "h1" nil "Hello World! jean")
  appDiv)



(enable-console-print!)
(println "Console.log")
