(function(){

    //create map in leaflet and tie it to the div called 'theMap'
    var map = L.map('theMap').setView([44.650627, -63.597140], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    // L.marker([44.650690, -63.596537]).addTo(map)
    //     .bindPopup('This is a sample popup. You can put any html structure in this including extra bus data. You can also swap this icon out for a custom icon. A png file has been provided for you to use if you wish.')
    //     .openPopup();
    
    //https://gist.github.com/geog4046instructor/80ee78db60862ede74eacba220809b64
    var myIcon = L.icon({
        iconUrl: 'bus.png',
        iconSize: [25,25],
      });

      var remove = L.layerGroup().addTo(map);

let refresher = () => {

    fetch('https://hrmbuses.herokuapp.com')
    
    .then(function(response){
        return response.json();
    })
    
    .then(function(json){



//https://tools.ietf.org/html/rfc7946#section-3.2
        const geoJson = function(x){
            return x.map(function(api){
                const geo = 
                { 
                "type": "Feature",
                "geometry":{
                    "type":"Point",
                    "coordinates": [api.vehicle.position.longitude, api.vehicle.position.latitude]
                },//end geometry
                "properties":{
                    "rot": api.vehicle.position.bearing,
                    "information" : "TripID: " + api.vehicle.trip.tripId + "<br/>"
                    + "StartDate: " +api.vehicle.trip.startDate + "<br/>"
                    + "RouteId: " +api.vehicle.trip.routeId
                    }//end info
                }//end properties
                return geo; 
            }// end geo
            );//end return
        };//end geoJson

        let geoJsonData = {};
        const jsonRouteTen = json.entity.filter((api)=> api.vehicle.trip.routeId <= 10);
        geoJsonData = geoJson(jsonRouteTen);

        ////console
        console.log(json);
        console.log(geoJson);
        console.log(geoJsonData); 
        ////console
           
        //https://stackoverflow.com/questions/41256026/clear-marker-layers-leaflet
        //https://leafletjs.com/reference-1.0.2.html#layergroup
        remove.clearLayers();

        // hover event http://zevross.com/blog/2014/10/28/tips-for-creating-leafleft-js-maps/
        L.geoJSON(geoJsonData,
            {onEachFeature: function(feature){
                let LatLng = [feature.geometry.coordinates[1],feature.geometry.coordinates[0]];
                L.marker(LatLng,{icon: myIcon, rotationAngle: feature.properties.rot})
                .bindPopup(feature.properties.information)
                .addTo(remove);
            }//end onEachFeature 
          });//end geoJson
    });//end json
    
// https://stackoverflow.com/questions/32913226/auto-refresh-page-every-30-seconds
// setTimeout(function () {location.reload();},7000);
setTimeout(refresher,7000);
};//end refresher
refresher();
})()//end IEFI


    // const geoData = function(json){
    //     return json.entity
    //     // .filter(function(x){return x.vehicle.trip.routeId <= 10})
    //     .map(function(x){return [x.vehicle.position.longitude, x.vehicle.position.latitude]});
    // }//end geoData

    // const vehicleInfo = function(json){
    //     return json.entity
    //     // .filter(function(x){return x.vehicle.trip.routeId <= 10})
    //     // .filter(function(x) {return x.id == 527})
    //     // .map(function(x){return ([x.vehicle.trip.tripId + "<br/>"+x.vehicle.trip.startDate + "<br/>"+x.vehicle.trip.routeId])});
    //     .map(function(x){return (["TripID: " + x.vehicle.trip.tripId + "<br/>"
    //     + "StartDate: " +x.vehicle.trip.startDate + "<br/>"
    //     + "RouteId: " +x.vehicle.trip.routeId])});
    //     // .map(function(x){return x});
    // }//end vehicleInfo

    // const way = function(json){
    //     return json.entity
    //     // .filter(function(x){return x.vehicle.trip.routeId <= 10 && x.vehicle.position.bearing != undefined})
    //     .map(function(x){return [x.vehicle.position.bearing]});
    //     }//end way