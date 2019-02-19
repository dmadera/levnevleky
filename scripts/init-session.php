<?php
  //session_start();
  $token = md5(rand(1000,9999));
  $_SESSION['token'] = $token;
?>