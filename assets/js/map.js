mapboxgl.accessToken = 'pk.eyJ1IjoiYWZyaWNhbm8xOSIsImEiOiJjbDUxaGY1YXIwNXFoM2NxcG1najZmZGpvIn0._lqJtlkSKz5RM6GHyIGkbg';

var map = document.getElementById('mapBox');

var myLocation;
var homeLocation;

document.addEventListener("DOMContentLoaded", function() {

	map = L.map('mapBox', {
    layers: MQ.mapLayer(),
    center: [38.736946, -9.142685],
    zoom: 13
	});
	getLocation();


});


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    map.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
	let mark = L.marker([position.coords.latitude, position.coords.longitude]).bindPopup("My Location").addTo(map);
	myLocation = position.coords;
	mark._icon.classList.add("myLoc");
}