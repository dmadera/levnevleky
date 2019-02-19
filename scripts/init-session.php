<?php
	if(!is_file("config.ini")) {
		die('No config.ini file found!');
	}

	$config = parse_ini_file("config.ini", true);
	$apikey = $config['map']['apikey'];

  //session_start();
  $token = md5(rand(1000,9999));
  $_SESSION['token'] = $token;
?>