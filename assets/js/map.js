
var myLocation;
var homeLocation;
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 10,
  });
  infoWindow = new google.maps.InfoWindow();
  getLocation();
  allStations();

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

// Linha Verde
$(document).ready(function() {
  $("#greenLine").click(function(e) {
    e.preventDefault();
    //map.remove();

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 10,
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
  });
});

// Linha Azul
$(document).ready(function() {
  $("#blueLine").click(function(e) {
    e.preventDefault();
    //map.remove();

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 10,
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
              const markerSub = new google.maps.Marker({
                position: { lat: geo.coordinates[1], lng: geo.coordinates[0]},
                map,
                title: item.est_name,
                icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  strokeColor: "blue",
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
  });
});

// Linha Vermelha
$(document).ready(function() {
  $("#redLine").click(function(e) {
    e.preventDefault();
    //map.remove();

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 10,
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
  });
});

// Linha Amarela
$(document).ready(function() {
  $("#yellowLine").click(function(e) {
    e.preventDefault();
    //map.remove();

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 10,
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
              const markerSub = new google.maps.Marker({
                position: { lat: geo.coordinates[1], lng: geo.coordinates[0]},
                map,
                title: item.est_name,
                icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  strokeColor: "#FFFF00",
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
  });
});

// Todas as Linhas
$(document).ready(function() {
  $("#allLines").click(function(e) {
    e.preventDefault();
    //map.remove();

    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 10,
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