mapboxgl.accessToken =
  "pk.eyJ1IjoiYWRhcnNoMjEyMiIsImEiOiJjbDF6NmU3OTAwamxlM2Rxb2Y1NHYybTEzIn0.K0HcH6ZrZUL9TUTf_Imvsw";


navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy:true
});

function successLocation(position){
    console.log(position);
    setMap([position.coords.longitude,position.coords.latitude])
}
function errorLocation(){
 setMap([-2.24,53.48])
}
function setMap(center){
    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center:center,
        zoom:15
      })
      const nav = new mapboxgl.NavigationControl()
      map.addControl(nav)

      var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      })
    
      map.addControl(directions, "top-left")

      map.addControl(
        new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
        })
        );
}


