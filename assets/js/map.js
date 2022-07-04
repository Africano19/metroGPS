mapboxgl.accessToken = 'sk.eyJ1IjoiYWZyaWNhbm8xOSIsImEiOiJjbDU3NnQ4dXQwY3oxM2VxbmdxeWkyMnhnIn0.sbBm3Zv3ozbLKt_6ep4hig';

const map = new mapboxgl.Map({
  container: 'map', // HTML container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-21.9270884, 64.1436456], // starting position [lng, lat]
  zoom: 13 // starting zoom
  
});

