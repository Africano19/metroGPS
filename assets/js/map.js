
var myLocation;
var homeLocation;
let map, infoWindow, coord;
var myLOcation;
let estacoes;

function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
    map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 12,
    disableDefaultUI: true,
  });
  infoWindow = new google.maps.InfoWindow();
  getLocation();
  allStations();
  //nearbyStation();
  directionsRenderer.setMap(map);

  const onChangeHandler = function () {
    let end = JSON.parse(document.getElementById("end").value);
    calculateAndDisplayRoute(directionsService, directionsRenderer, end );
  };
  (document.getElementById("end")).addEventListener(
    "change",
    onChangeHandler
  );
    
}





//A MINHA LOCALIZAÇÃO DRIVING
function getLocation() {
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map.setCenter(pos);
        myLOcation = pos;
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

function calculateAndDisplayRoute(directionsService, directionsRenderer, end) {
  directionsService
    .route({
      origin: myLOcation,
      destination: { lat: end.coordinates[1], lng: end.coordinates[0]},
      travelMode: google.maps.TravelMode.DRIVING,
    })
    .then((response) => {
      console.log(response);
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
    
}



// Todas as estações
function allStations(){
	$.ajax({
		url: 'https://gps-metro.herokuapp.com/db/php/auten/estacoes.php',
		type:"GET",
		dataType: 'json',
		success: function(data){
      estacoes = data;
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


              var square = {
                path: 'M -2,-2 2,-2 2,2 -2,2 z', // 'M -2,0 0,-2 2,0 0,2 z',
                strokeColor: '#3B3B3B',
                fillColor: '#3B3B3B',
                fillOpacity: 1,
                scale: 3
              };

              const markerSub = new google.maps.Marker({
                position: { lat: geo.coordinates[1], lng: geo.coordinates[0]},
                map,
                title: item.est_name,
                icon: square,
                label: {
                  text:"M",
                  color: "white",
                  fontWeight: "bold"
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
function nearbyStation(){
  var service = new google.maps.DistanceMatrixService();

  let coords = new Array();          
    estacoes.forEach(item => {
      let coord = item.coord.replaceAll("POINT(", "");
      coord = coord.replaceAll(")", "");
      coord = coord.split(" ");
      const latLng = new google.maps.LatLng(coord[1], coord[0]);
      coords.push(latLng);
  });

  service.getDistanceMatrix(
    {
      origins: myLOcation,
      destinations: coords,
      travelMode: 'DRIVING',
      transitOptions: TransitOptions,
      drivingOptions: DrivingOptions,
      unitSystem: google.maps.UnitSystem.METRIC,
    }, callback);

    function callback(response, status) {
    console.log(response, status);
    var fastId = -1;
    var fastRoute = 99999999;
    var fastRoutText = "";
    for(var i = 0; i < response.rows[0].elements.length; i++){
        if(response.rows[0].elements[i].distance.value < fastRoute){
            fastRoute = response.rows[0].elements[i].distance.value;
            fastRoutText = response.rows[0].elements[i].distance.text;
            fastId = i;
        }
      }

      console.log(response.destinationAddresses[fastId], fastRoutText);
    
      geocoder
      .geocode({address: response.destinationAddresses[fastId]})
      .then((result) => {
          const { results } = result;
          console.log(results);

          start = myLOcation;
          end = {"lat": results[0].geometry.location.lat(), "lng": results[0].geometry.location.lng()};
          calcRoute();
      })
      .catch((e) => {
          alert("Geocode was not successful for the following reason: " + e);
      });

  }

}
*/

// Linha Verde
$(document).ready(function() {
  $("#greenLine").click(function(e) {
    e.preventDefault();
    //map.remove();

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 12,
    });
    
    getLocation();

    directionsRenderer.setMap(map);

    const onChangeHandler = function () {
      let greenEnd = JSON.parse(document.getElementById("endGreen").value);
      calculateAndDisplayRoute(directionsService, directionsRenderer, greenEnd);
    };
    (document.getElementById("endGreen")).addEventListener(
      "change",
      onChangeHandler
    );
  
   

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

              var square = {
                path: 'M -2,-2 2,-2 2,2 -2,2 z', // 'M -2,0 0,-2 2,0 0,2 z',
                strokeColor: '#4CAF50',
                fillColor: '#4CAF50',
                fillOpacity: 1,
                scale: 3
              };

              const markerSub = new google.maps.Marker({
                position: { lat: geo.coordinates[1], lng: geo.coordinates[0]},
                map,
                title: item.est_name,
                icon: square,
                label: {
                  text:"M",
                  color: "white",
                  fontWeight: "bold"
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
  });
});

// Linha Azul
$(document).ready(function() {
  $("#blueLine").click(function(e) {
    e.preventDefault();
    //map.remove();

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 12,
    });
    
    getLocation();


    directionsRenderer.setMap(map);

    
  const onChangeHandler = function () {
    let blueEnd = JSON.parse(document.getElementById("endBlue").value);
    calculateAndDisplayRoute(directionsService, directionsRenderer, blueEnd);
  };
  (document.getElementById("endBlue")).addEventListener(
    "change",
    onChangeHandler
  );

  


    
  $.ajax({
		url: 'https://gps-metro.herokuapp.com/db/php/auten/blue.php',
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
              
              var square = {
                path: 'M -2,-2 2,-2 2,2 -2,2 z', // 'M -2,0 0,-2 2,0 0,2 z',
                strokeColor: '#0000FF',
                fillColor: '#0000FF',
                fillOpacity: 1,
                scale: 3
              };

              const markerSub = new google.maps.Marker({
                position: { lat: geo.coordinates[1], lng: geo.coordinates[0]},
                map,
                title: item.est_name,
                icon: square,
                label: {
                  text:"M",
                  color: "white",
                  fontWeight: "bold"
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
  });
});

// Linha Vermelha
$(document).ready(function() {
  $("#redLine").click(function(e) {
    e.preventDefault();
    //map.remove();

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 12,
    });
    
    getLocation();

    directionsRenderer.setMap(map);

    

  const onChangeHandler = function () {
    let redEnd = JSON.parse(document.getElementById("endRed").value);
    calculateAndDisplayRoute(directionsService, directionsRenderer, redEnd);
  };
  (document.getElementById("endRed")).addEventListener(
    "change",
    onChangeHandler
  );

  
    
  $.ajax({
		url: 'https://gps-metro.herokuapp.com/db/php/auten/red.php',
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

              var square = {
                path: 'M -2,-2 2,-2 2,2 -2,2 z', // 'M -2,0 0,-2 2,0 0,2 z',
                strokeColor: '#F00',
                fillColor: '#F00',
                fillOpacity: 1,
                scale: 3
              };
              

              const markerSub = new google.maps.Marker({
                position: { lat: geo.coordinates[1], lng: geo.coordinates[0]},
                map,
                title: item.est_name,
                icon: square,
                label: {
                  text:"M",
                  color: "white",
                  fontWeight: "bold"
                }
              });

              markerSub.addListener("click", () => {
                infowindow.open({
                  anchor: markerSub,
                  map,
                  shouldFocus: true,
                });
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
  });
});

// Linha Amarela
$(document).ready(function() {
  $("#yellowLine").click(function(e) {
    e.preventDefault();
    //map.remove();

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 12,
    });
    
    getLocation();

    directionsRenderer.setMap(map);

    

  const onChangeHandler = function () {
    let yellEnd = JSON.parse(document.getElementById("endYellow").value);
    calculateAndDisplayRoute(directionsService, directionsRenderer, yellEnd);
  };
  (document.getElementById("endYellow")).addEventListener(
    "change",
    onChangeHandler
  );

  
    
  $.ajax({
		url: 'https://gps-metro.herokuapp.com/db/php/auten/yellow.php',
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

              var square = {
                path: 'M -2,-2 2,-2 2,2 -2,2 z', // 'M -2,0 0,-2 2,0 0,2 z',
                strokeColor: '#FFFF00',
                fillColor: '#FFFF00',
                fillOpacity: 1,
                scale: 3
              };

              const markerSub = new google.maps.Marker({
                position: { lat: geo.coordinates[1], lng: geo.coordinates[0]},
                map,
                title: item.est_name,
                icon: square,
                label: {
                  text:"M",
                  fontWeight: "bold"
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
  });
});

// Todas as Linhas
$(document).ready(function() {
  $("#allLines").click(function(e) {
    e.preventDefault();
    //map.remove();

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 12,
    });
    
    getLocation();

    directionsRenderer.setMap(map);

    const onChangeHandler = function () {
      let endAll = JSON.parse(document.getElementById("end").value);
      calculateAndDisplayRoute(directionsService, directionsRenderer, endAll);
    };
    (document.getElementById("end")).addEventListener(
      "change",
      onChangeHandler
    );
  
    
    
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
          '<p>'+item.est_line+'</p>'+
          '</div>'+
          "</div>";

        
              const infowindow = new google.maps.InfoWindow({
                content: contentString,
              });


              var square = {
                path: 'M -2,-2 2,-2 2,2 -2,2 z', // 'M -2,0 0,-2 2,0 0,2 z',
                strokeColor: '#3B3B3B',
                fillColor: '#3B3B3B',
                fillOpacity: 1,
                scale: 3
              };

              const markerSub = new google.maps.Marker({
                position: { lat: geo.coordinates[1], lng: geo.coordinates[0]},
                map,
                title: item.est_name,
                icon: square,
                label: {
                  text:"M",
                  color: "white",
                  fontWeight: "bold"
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
  });
});

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