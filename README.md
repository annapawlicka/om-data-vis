om-data-vis
===========

Data visualisations using Om and JavaScript libraries

 - Chart-http: dimple.js + core.async + Om + compojure + liberator +
   alia/hayt
 - lastfm-chart: dimple.js + last.fm API + core.async
 - Simple-map: leaflet.js + core.async + Om
 
 
Build with: 
```
lein cljsbuild once <build-id>
```
 
Run ring server:
```
lein ring server-headless
```

Open index.html in a browser of your choice.
