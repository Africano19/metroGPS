<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='utf-8' />
  <title>Switch to Mapbox</title>
  <meta name='viewport' content='width=device-width, initial-scale=1' />
  <!-- Import Mapbox GL JS  -->
  <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js'></script>
  <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css' rel='stylesheet' />

  <style>
    body {
      margin: 0;
      padding: 0;
    }

    #map {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>

<body>
  <!-- Create a container for the map. -->
  <div id='map'></div>

  <script>
    // Add your Mapbox access token.
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWZyaWNhbm8xOSIsImEiOiJjbDUxaGY1YXIwNXFoM2NxcG1najZmZGpvIn0._lqJtlkSKz5RM6GHyIGkbg';

    // Code from the next step will go here.
  </script>
</body>

</html>