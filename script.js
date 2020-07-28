let map;

function initMap() {
    // map options + new map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.85045, lng: 4.34878},
    zoom: 15
  });
}

var marker = new google.maps.Marker({
    position: {lat:50.871220, lng:4.083370},
    map:map
});
    