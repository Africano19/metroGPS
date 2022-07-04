var myLocation;
var homeLocation;
let map, infoWindow;
var markersArray = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });

  //generateMarkers();
  infoWindow = new google.maps.InfoWindow();
  markersArray.push(marker);
  google.maps.event.addListener(marker,"click",function(){});
  map.clearOverlays();
  getLocation();


}

/*
function generateMarkers(){

	$.ajax({
		url: 'https://jadoc.pt/db/php/authentication/servspublicos.php',
		type:"GET",
		dataType: 'json',
		success: function(data){

			data.forEach((item) => {
				let geo = JSON.parse(item.servpub_geometry);

					let mainDiv = document.createElement('div');

			    //AddTitle
			    let title = document.createElement('p');
			    title.innerHTML = item.servpub_name;
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

function showDirection(startLat, startLong, endLat, endLong) {
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

  google.maps.Map.prototype.clearOverlays = function() {
    for (var i = 0; i < markersArray.length; i++ ) {
      markersArray[i].setMap(null);
    }
    markersArray.length = 0;
  }


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