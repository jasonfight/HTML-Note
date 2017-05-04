<?php 

  header('Content-type: text/html; charset=utf-8');


  // $name = $_POST["name"];
  // $passwd = $_POST["passwd"];

  $name = $_GET["name"];
  $passwd = $_GET["passwd"];

  //如果前端发送的是xml的数据，那么php需要对应的方式去从xml中提取数据

  if ( ($name == "lisi")  && ($passwd == "123456")){
  	 echo "OK";
  } else {
  	echo "FAIL";
  }

  exit;
 ?>