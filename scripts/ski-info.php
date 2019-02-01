<?php
header('Content-Type: application/json');

function get_data($url) {
	$ch = curl_init();
	$timeout = 5;
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
	$data = curl_exec($ch);
	curl_close($ch);
	return $data;
}

if(!is_file("config.ini")) {
    die('No config.ini file found!');
}

$config = parse_ini_file("config.ini", true);
$config_url = $config['holidayinfo'];

$url = $config_url['url']."?".http_build_query($config_url['params']);
$xml = simplexml_load_string(get_data($url));

$data = $xml->country->region->location;
echo json_encode($data);
?>