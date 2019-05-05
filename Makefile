build:
	lein figwheel
production:
	lein cljsbuild once min
