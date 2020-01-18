
require([
    "esri/Map",
    "esri/views/MapView", 
    "esri/widgets/BasemapToggle",
      "esri/widgets/BasemapGallery",
      "esri/layers/FeatureLayer"
    ], function(Map, MapView,BasemapToggle,BasemapGallery,featureLayer) {
    
    var map = new Map({
    basemap: "gray"
    });
    
    var view = new MapView({
    container: "mapview",
    map: map,
    center: [38.56480354,-0.28866249], // longitude, latitude
    zoom: 6
    });
    var basemapGallery = new BasemapGallery({
        view: view,
        source: {
          portal: {
            url: "https://www.arcgis.com",
            useVectorBasemaps: true  // Load vector tile basemaps
          }
        }
      });
      var kenyanCounties = new featureLayer({
        url: "https://services5.arcgis.com/9VPpCfhQgOxcWxgB/arcgis/rest/services/kenyan_counties/FeatureServer"
      });

      map.add(kenyanCounties);
      view.ui.add(basemapGallery, "bottom-right");
    })