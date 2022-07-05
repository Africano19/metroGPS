var map = document.getElementById('leaflet2');

var myLocation;
var homeLocation;

document.addEventListener("DOMContentLoaded", function() {

	map = L.map('leaflet2', {
    layers: MQ.mapLayer(),
    center: [38.736946, -9.142685],
    zoom: 13
	});

	generateMarkers();

	getLocation();

});

function generateMarkers(){

	$.ajax({
		url: 'https://gps-metro.herokuapp.com/db/php/auten/estacoes.php',
		type:"GET",
		dataType: 'json',
		success: function(data){

			data.forEach((item) => {
				let geo = JSON.parse(item.servpub_geometry);

					let mainDiv = document.createElement('div');

			    //AddTitle
			    let title = document.createElement('p');
			    title.innerHTML = item.est_name;
			    mainDiv.appendChild(title);

			    //AddButtonHome
			    let homeButton = document.createElement('button');
			    homeButton.innerHTML = "From Home";
			    homeButton.addEventListener('click', () => {
			        showDirectionFromHome(geo.coordinates[1],geo.coordinates[0]);
			    });
			    mainDiv.appendChild(homeButton);

			    //AddButtonLoc
			    let locButton = document.createElement('button');
			    locButton.innerHTML = "From Location";
			    locButton.addEventListener('click', () => {
			        showDirection(myLocation.latitude,myLocation.longitude,geo.coordinates[1],geo.coordinates[0]);
			    });
			    mainDiv.appendChild(locButton);


			    L.marker([geo.coordinates[1], geo.coordinates[0]]).bindPopup(mainDiv).addTo(map);
			});

		}
	});
}

/*function showDirection(startLat, startLong, endLat, endLong) {
    map.remove();

		map = L.map('leaflet2', {
			layers: MQ.mapLayer(),
			center: [38.736946, -9.142685],
			zoom: 13
		});


		let mark = L.marker([myLocation.latitude, myLocation.longitude]).bindPopup("My Location").addTo(map);

    generateMarkers();

    var dir = MQ.routing.directions();

    dir.route({
        locations: [
            { latLng: { lat: startLat, lng: startLong } },
            { latLng: { lat: endLat, lng: endLong } }
        ],
    });

    map.addLayer(new MQ.Routing.RouteLayer({
        directions: dir,
        fitBounds: true
    }));
}

function showDirectionFromHome(endLat, endLong) {
    map.remove();

		map = L.map('leaflet2', {
			layers: MQ.mapLayer(),
			center: [38.736946, -9.142685],
			zoom: 13
		});


		let mark = L.marker([myLocation.latitude, myLocation.longitude]).bindPopup("My Location").addTo(map);

    generateMarkers();

    var dir = MQ.routing.directions();

    dir.route({
        locations: [
            homeLocation,
            { latLng: { lat: endLat, lng: endLong } }
        ],
    });

    map.addLayer(new MQ.Routing.RouteLayer({
        directions: dir,
        fitBounds: true
    }));
}
*/
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
