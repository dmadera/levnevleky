<?php
	if(!is_file("scripts/config.ini")) {
		die('No config.ini file found!');
	}

	$config = parse_ini_file("scripts/config.ini", true);
	$apikeys = $config['apikeys'];

	$json = file_get_contents('scripts/notification-data.json');
	$json_data = json_decode($json, true);

	if(!array_key_exists('main_modal', $json_data) || !array_key_exists('show', $json_data['main_modal'])) {
		$main_modal = array('show' => false);
	} else {
		$main_modal = $json_data['main_modal'];
	}

	//session_start();
	$token = md5(rand(1000,9999));
	$_SESSION['token'] = $token;
?>
