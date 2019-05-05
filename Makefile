build:
	lein figwheel
production:
	lein cljsbuild once min
	publish-github-pages.sh
