mapboxgl.accessToken = 'pk.eyJ1IjoiYWZyaWNhbm8xOSIsImEiOiJjbDUxaGY1YXIwNXFoM2NxcG1najZmZGpvIn0._lqJtlkSKz5RM6GHyIGkbg';
const map = new mapboxgl.Map({
container: 'mapBox', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9, // starting zoom
projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
map.setFog({}); // Set the default atmosphere style
});
