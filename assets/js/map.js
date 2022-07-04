/*function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

}

new google.maps.Marker({
            position: pos,
            map,
            title: "A minha Localização",
            icon: "../img/arrow.png"
          });



infoWindow.setPosition(pos);
          infoWindow.setContent("A Minha Localização");
          infoWindow.open(map);
          map.setCenter(pos);

*/

let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");
    // Try HTML5 geolocation.
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
                  '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
                  '<div id="bodyContent">' +
                  "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
                  "sandstone rock formation in the southern part of the " +
                  "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
                  "south west of the nearest large town, Alice Springs; 450&#160;km " +
                  "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
                  "features of the Uluru - Kata Tjuta National Park. Uluru is " +
                  "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
                  "Aboriginal people of the area. It has many springs, waterholes, " +
                  "rock caves and ancient paintings. Uluru is listed as a World " +
                  "Heritage Site.</p>" +
                  '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                  "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
                  "(last visited June 22, 2009).</p>" +
                  "</div>" +
                  "</div>";

                const infowindow = new google.maps.InfoWindow({
                  content: contentString,
                });

                const marker = new google.maps.Marker({
                  position: pos,
                  map,
                  title: "Uluru (Ayers Rock)",
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
      // Browser doesn't support Geolocation
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