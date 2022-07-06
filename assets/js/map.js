
var myLocation;
var homeLocation;
let map, infoWindow;
var myLOcation;

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

  const onChangeHandler = function () {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  };
  (document.getElementById("end")).addEventListener(
    "change",
    onChangeHandler
  );
}





//A MINHA LOCALIZAÇÃO
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

function calculateAndDisplayRoute(directionsService,directionsRenderer, status) {
  let end = JSON.parse(document.getElementById("end").value);
  console.log(end);
  console.log(myLOcation);
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



// Linha Verde
$(document).ready(function() {
  $("#greenLine").click(function(e) {
    e.preventDefault();
    //map.remove();

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 12,
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

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 12,
    });
  
    getLocation();
    
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

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 12,
    });
  
    getLocation();
    
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

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 12,
    });
  
    getLocation();
    
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

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 12,
    });
  
    getLocation();
    
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



/*function calcRoute(endRoute){
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();

  var request = {
    origin:  myLOcation,
    destination:  endRoute,
    travelMode: google.maps.TravelMode.WALKING,
    unitSystem: google.maps.UnitSystem.METRIC
  }

  directionsService.route(request,(result, status) => {
    if(status == google.maps.DirectionsStatus.Ok) {
      
      //const output = document.querySelector('#output');
      directionsDisplay.setDirections(result);
    }else{
      directionsDisplay.setDirections({routes:[]});
      map.setCenter({ lat: -34.397, lng: 150.644 });
    }
  });
}*/

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