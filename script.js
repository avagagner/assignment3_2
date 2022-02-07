require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "hybrid"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-90.1994, 38.6270],
          scale: 1083600
        });

 

        /********************
         * Add feature layer
         ********************/

        // Carbon storage of trees in Warren Wilson College.
        var featureLayer = new FeatureLayer({
          url:"https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/Lewis_and_Clark_Trail_Historic_Route/FeatureServer"});
        map.add(featureLayer);
   
   
   var featureLayer = new FeatureLayer({
     url:"https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/Missouri_River1804/FeatureServer"
   });map.add(featureLayer);
        

 });
