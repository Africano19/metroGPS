let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();


  //A minha localização
  const locationButton = document.createElement("button");
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
                  '<h1 id="firstHeading" class="firstHeading">A Minha Localização.</h1>' +
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


    //Lozalização das estações


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