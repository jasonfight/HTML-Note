<?php 

  header('Content-type: text/html; charset=utf-8');


  // $name = $_POST["name"];
  // $passwd = $_POST["passwd"];

  $name = $_GET["name"];
  $passwd = $_GET["passwd"];

  if ( ($name == "lisi")  && ($passwd == "123456")){
  	 echo "OK";
  } else {
  	echo "FAIL";
  }

  exit;
 ?>