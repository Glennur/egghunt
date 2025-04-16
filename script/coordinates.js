getLocation();

let lat = 58.673993;
let long = 17.07306755;
console.log(lat, long);
var x = document.getElementById("coordinates");



function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition, null, {
      enableHighAccuracy: true,
      maximumAge: 1000,
      timeout: 5000
    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

  lat = position.coords.latitude;
  long = position.coords.longitude;

  marker.setLatLng([lat, long]);
  map.setView([lat, long]);


  const lat1 = parseFloat(localStorage.getItem("questlat"));
  const long1 = parseFloat(localStorage.getItem("questlong"));

  const dist = getDistance(lat, long, lat1, long1)

  console.log("distans: " + dist + " meter");
  var x = document.getElementById("distance");
  x.innerHTML = dist + " meter till målet";


  if (dist < 120) {
    getQuestion()    
  }
}





// Initiera kartan med startkoordinater med zoom-nivå 19
var map = L.map('map').setView([lat, long], 19);

// Lägg till OpenStreetMap som bakgrundskarta
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let bunnyMarker;
let marker = L.marker([lat, long]).addTo(map);

function drawMarker() {
  const lat1 = parseFloat(localStorage.getItem("questlat"));
  const long1 = parseFloat(localStorage.getItem("questlong"));
  if (bunnyMarker) map.removeLayer(bunnyMarker);

  const bunnyIcon = L.icon({
    iconUrl: 'images/bunny.png',
    iconSize: [32, 32], // eller annan storlek som passar
    iconAnchor: [16, 16] // sätter bilden centrerad
  });
  const userIcon = L.icon({
    iconUrl: 'images/user.png',
    iconSize: [32, 32], // eller annan storlek som passar
    iconAnchor: [16, 16] // sätter bilden centrerad
  });

  bunnyMarker = L.marker([lat1, long1], { icon: bunnyIcon }).addTo(map);
  

  if (marker) map.removeLayer(marker);
  marker = L.marker([lat, long]).addTo(map);
}




function getDistance(lat, long, lat1, long1) {
  var radlat1 = Math.PI * lat / 180;
  var radlat2 = Math.PI * lat1 / 180;
  var theta = long - long1;
  var radtheta = Math.PI * theta / 180;
  var dist = Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = dist * 180 / Math.PI;
  dist = dist * 60 * 1.1515; // miles
  dist = dist * 1.609344 * 1000; // till meter
  dist = Math.round(dist);
  return dist;
}




