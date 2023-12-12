<?php
$user = 'nnt';
$password = '123456';
$db = 'truongdev';
$host = 'localhost';
$port = 3333;

$conn = new mysqli($host, $user, $password, $db, $port);

// if ($conn->connect_error) {
// 	die("error");
// }
// echo "Connected successfully <br>";

// $crdb = "CREATE database if not exists truongdev ";
// if ($conn->query($crdb) === TRUE) {
// 	echo "okkkkkk <br>";
// } else {
// 	echo " huhuhuhuhu";
// }