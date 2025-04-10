
getLocation();
let age;
let lat = 58.673993;
let long = 17.07306755;
console.log(lat);
var x = document.getElementById("demo");



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

function checkAge(value) {
  age = value
  console.log(age)
}

// Initiera kartan med startkoordinater (ex. Stockholm) och zoomnivå
var map = L.map('map').setView([lat, long], 19);

// Lägg till OpenStreetMap som bakgrundskarta
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker([lat, long]).addTo(map);

var circle = L.circle([58.673993, 17.07306755], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 5
}).addTo(map);
