<!DOCTYPE html>
<html>
<head>
<title>Metro de Lisboa</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>

<style>
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
.w3-sidebar {width: 120px;background: #222;}
#main {margin-left: 120px}
@media only screen and (max-width: 600px) {#main {margin-left: 0}}
.button  {background-color: #4CAF50; color: white;/* Green */}
.button2 {background-color: #FFFF00; color: black;} /* Yellow */
.button3 {background-color: #0000FF; color: white;} /* Blue */ 
.button4 {background-color: #ff0000; color: white;} /* Red */
.button5 {background-color: #e7e7e7; color: black;} /* Gray */ 

.calculateRoute{
  text-align: center;
  border: 3px solid white;
  margin: 10px;
  border-radius: 25px;

}

</style>
</head>
<body class="w3-black">
<nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  <img src="assets/img/logo.png" style="width:100%">
  <a href="#" class="w3-bar-item w3-button w3-padding-large w3-black">
    <i class="fa fa-home w3-xxlarge"></i>
    <p>HOME</p>
  </a>
  <a href="#estacoes" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
  <i class="fa fa-map w3-xxlarge" ></i>
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
    <br><br><br><br><br><br><br><br>
  </header>

  

  <!-- About Section -->
  <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="estacoes">
    <h2 class="w3-text-light-grey">Estações</h2>
    <hr style="width:200px" class="w3-opacity">
    <div class ="calculateRoute">
      <p>This text is centered.</p>
    </div>
    <div class="w3-bar">
      <button class="w3-bar-item w3-button button2" id="yellowLine" value="yellowLine" style="width:33.3%;">Linha Amarela</button>
      <button class="w3-bar-item w3-button button5" id="allLines" style="width:33.3%;">Todas as Linhas</button>
      <button class="w3-bar-item w3-button button3" id="blueLine" value="blueLine" style="width:33.3%; ">Linha Azul</button>
      <button class="w3-bar-item w3-button button4" id="redLine" value="redLine" value="redLine" style="width:50%;">Linha Vermelha</button>
      <button class="w3-bar-item w3-button button" id="greenLine" value="greenLine" style="width:50%; ">Linha Verde</button>  
    </div>
    <div id="googleMap" style="width:100%;height:600px;"></div>
  
  <!-- End Contact Section -->
  </div>
  

<!-- END PAGE CONTENT -->
</div>
<script src="assets/js/map.js"></script> 
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAS9pL_UMsYTkkdxE2wWupXu4QPg46PjSA&callback=initMap"></script>
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>