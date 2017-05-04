<?php

  header('Content-type: text/html; charset=utf-8');

  $name = $_GET["name"];
  $passwd = $_GET["passwd"];

  // $name = $_POST["name"];
  // $passwd = $_POST["passwd"];

  echo "name=".$name."passwd=".$passwd;
  exit;
 ?>
