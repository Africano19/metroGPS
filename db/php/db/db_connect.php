<?php

function OpenCon()
{


  $host = "ec2-54-75-184-144.eu-west-1.compute.amazonaws.com";
  $dbname = "dctsh3jburifva";
  $user = "vbsklfhutehhtd";
  $password = "352d12041f05eec6d219b20d0969033d99bccf6293073730e3dd1a866557c776";
  $port = "5432";

  $con = "dbname=" . $dbname . " host=" . $host . " port=" . $port . " user=" . $user . " password=" . $password . " sslmode=require";

  $conn = pg_connect($con);

  if($conn){
      //echo "Connected <br />" . $conn;
      return $conn;
  }else {
      echo "Not connected";
  }

}


?>
