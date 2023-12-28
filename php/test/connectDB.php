<?php

// phpinfo();

error_reporting(E_ALL);
ini_set('display_errors', 1);

$user = 'truong';
$password = '123456789';
$db = 'truongdev';
$host = 'localhost';
$port = 3306;

$conn = new mysqli($host, $user, $password, $db, $port);
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}
echo "Kết nối thành công <br>";

// $crdb = "CREATE database if not exists truongdev ";
// if ($conn->query($crdb) === TRUE) {
// 	echo "okkkkkk <br>";
// } else {
// 	echo " huhuhuhuhu";
// }