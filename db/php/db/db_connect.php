<?php

function OpenCon()
{


  $host = "ec2-54-228-125-183.eu-west-1.compute.amazonaws.com";
  $dbname = "d5fmut8hbd5ct0";
  $user = "pslohlrbuiyxuq";
  $password = "1755901ed7135e25b2fc1091d489df47349bafe5727be01215d0b90fb80ef3b3";
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
