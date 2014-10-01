om-data-vis
===========

Repo with basic data visualisations based on Om and JavaScript libraries that I used as demo at EuroClojure 2014. Will probably add more examples as needed - it's becoming more of a collection of useful "stuff" :)

 - Chart-http: dimple.js + core.async + Om + compojure + liberator
 - lastfm-chart: dimple.js + last.fm API + core.async
 
   It requires last.fm API key. Copy your key to:
   ```
   resources/lastfm.edn
   ```
   like this:

   ```
   
   {:api-key "65yrtgbdfbd4656457foo")
   ```
   
   API key can be obtained here: http://www.last.fm/api/account/create
 - Simple-map: leaflet.js + core.async + Om
 - Draggable-widget: Simple component that wraps other components to make them draggable. Uses core.async.
 
 
Build with: 
```
lein cljsbuild once <build-id>
```
 
Run ring server (required for ```chart-http```):
```
lein ring server-headless
```

To see examples in action, open ```examples/<id>/index.html``` in a browser of your choice.
