
getLocation();

let lat = 58.673993;
let long = 17.07306755;
console.log(lat, long);
var x = document.getElementById("coordinates");



function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

  lat = position.coords.latitude;
  long = position.coords.longitude;
  x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  marker.setLatLng([lat, long]);
  map.setView([lat, long]);

}


// Initiera kartan med startkoordinater med zoom-nivå 19
var map = L.map('map').setView([lat, long], 19);

// Lägg till OpenStreetMap som bakgrundskarta
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const bunnyIcon = L.icon({
  iconUrl: 'images/bunny.png', // byt till din faktiska sökväg
  iconSize: [32, 32], // eller annan storlek som passar
  iconAnchor: [16, 16] // sätter bilden centrerad
});

const bunnyMarker = L.marker([58.673993, 17.07306755], { icon: bunnyIcon }).addTo(map);

var marker = L.marker([lat, long]).addTo(map);


var circle = L.circle([58.673993, 17.07306755], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.2,
  radius: 8
}).addTo(map);

