var myLocation;
var homeLocation;
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 13,
  });
  infoWindow = new google.maps.InfoWindow();
  getLocation();
  //allLines()
  greenLines();
}

function greenLines(){
  //map.remove();

  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 13,
  });

  getLocation();

  $.ajax({
		url: 'https://gps-metro.herokuapp.com/db/php/auten/green.php',
		type:"GET",
		dataType: 'json',
		success: function(data){

			data.forEach((item) => {
				let geo = JSON.parse(item.est_geometry);
          
          const contentString =
                '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h3 id="firstHeading" class="firstHeading" style="font-size: 15px;"><b>'+item.est_name+'<b/></h3>' +
                '<div id="bodyContent">' +
                '<p>'+item.est_line+'</p> </div>'+
                "</div>";

              const infowindow = new google.maps.InfoWindow({
                content: contentString,
              });
              const markerSub = new google.maps.Marker({
                position: { lat: geo.coordinates[1], lng: geo.coordinates[0]},
                map,
                title: item.est_name,
                icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  strokeColor: "green",
                  scale: 3
                }
              });

              markerSub.addListener("click", () => {
                infowindow.open({
                  anchor: markerSub,
                  map,
                  shouldFocus: true,
                });
              });

			});

		}
	});
}

function yellowLines(){
  
}

function blueLines(){
  
}

function redLines(){
  
}

function allLines(){
  $.ajax({
		url: 'https://gps-metro.herokuapp.com/db/php/auten/estacoes.php',
		type:"GET",
		dataType: 'json',
		success: function(data){

			data.forEach((item) => {
				let geo = JSON.parse(item.est_geometry);
          
          const contentString =
                '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h3 id="firstHeading" class="firstHeading" style="font-size: 15px;"><b>'+item.est_name+'<b/></h3>' +
                '<div id="bodyContent">' +
                '<p>'+item.est_line+'</p> </div>'+
                "</div>";

              const infowindow = new google.maps.InfoWindow({
                content: contentString,
              });
              const markerSub = new google.maps.Marker({
                position: { lat: geo.coordinates[1], lng: geo.coordinates[0]},
                map,
                title: item.est_name,
                icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  strokeColor: "red",
                  scale: 3
                }
              });

              markerSub.addListener("click", () => {
                infowindow.open({
                  anchor: markerSub,
                  map,
                  shouldFocus: true,
                });
              });

			});

		}
	});
}


/*
function showDirection(startLat, startLong, endLat, endLong) {
    map.remove();

		map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 13,
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

		map = L.map('googleMap', {
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
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map.setCenter(pos);

              const contentString =
                '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h3 id="firstHeading" class="firstHeading">A Minha Localização.</h3>' +
                '<div id="bodyContent">' +
                "<p></p>" +
                "</div>" +
                "</div>";

              const infowindow = new google.maps.InfoWindow({
                content: contentString,
              });

              const marker = new google.maps.Marker({
                position: pos,
                map,
                title: "A Minha Localização.",
              });

              marker.addListener("click", () => {
                infowindow.open({
                  anchor: marker,
                  map,
                  shouldFocus: false,
                });
              });
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }

}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;