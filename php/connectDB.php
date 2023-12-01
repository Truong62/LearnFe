<?php
$user = 'nnt';
$password = '123456';
$db = 'truongdev';
$host = 'localhost';
$port = 3333;

$link = mysqli_init();
$success = mysqli_real_connect(
    $link,
    $host,
    $user,
    $password,
    $db,
    $port
);
if ($success) {
    echo "okok";
} else {
    echo "nooo";
}
