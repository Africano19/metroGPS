<!DOCTYPE html>
<html>
<head>
<title>Metro de Lisboa</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
<script src="assets/js/map.js"></script> 
<style>
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
/* Set the width of the sidebar to 120px */
.w3-sidebar {width: 120px;background: #222;}
/* Add a left margin to the "page content" that matches the width of the sidebar (120px) */
#main {margin-left: 120px}
/* Remove margins from "page content" on small screens */
@media only screen and (max-width: 600px) {#main {margin-left: 0}}
</style>
</head>
<body class="w3-black">

<!-- Icon Bar (Sidebar - hidden on small screens) -->
<nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  <!-- Avatar image in top left corner -->
  <img src="assets/img/logo.png" style="width:100%">
  <a href="#" class="w3-bar-item w3-button w3-padding-large w3-black">
    <i class="fa fa-home w3-xxlarge"></i>
    <p>HOME</p>
  </a>
  <a href="#estacoes" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="bi bi-map-fill"></i>
    <p>ESTAÇÕES</p>
  </a>
</nav>

<!-- Navbar on small screens (Hidden on medium and large screens) -->
<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="#" class="w3-bar-item w3-button" style="width:25% !important">HOME</a>
    <a href="#estacoes" class="w3-bar-item w3-button" style="width:25% !important">ESTAÇÕES</a>
  </div>
</div>

<!-- Page Content -->
<div class="w3-padding-large" id="main">
  <!-- Header/Home -->
  <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
    <h1 class="w3-jumbo"><span class="w3-hide-small">Metro</span> de Lisboa</h1>
    <p>Aqui Pode encontrar todas as Paregens de metro e as respretivas Rotas</p>
    <img src="assets/img/img.jpg" alt="boy" class="w3-image" width="992" height="1108">
  </header>

  <br><br><br><br>

  <!-- About Section -->
  <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="estacoes">
    <h2 class="w3-text-light-grey">Estações</h2>
    <hr style="width:200px" class="w3-opacity">
    
    <div id="googleMap" style="width:100%;height:550px;"></div>
  
  <!-- End Contact Section -->
  </div>
  

<!-- END PAGE CONTENT -->
</div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAS9pL_UMsYTkkdxE2wWupXu4QPg46PjSA&callback=myMap"></script>
</body>
</html>