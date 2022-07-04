mapboxgl.accessToken = 'pk.eyJ1IjoiYWZyaWNhbm8xOSIsImEiOiJjbDUxaGY1YXIwNXFoM2NxcG1najZmZGpvIn0._lqJtlkSKz5RM6GHyIGkbg';
const map = new mapboxgl.Map({
container: 'mapBox', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [38.7890123,-9.2026486],
zoom: 13
});
map.on('style.load', () => {
map.setFog({}); // Set the default atmosphere style
});
getLocation();

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