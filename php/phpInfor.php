<?php
// echo phpinfo();

// echo $_SERVER["PHP_SELF"];
// echo "<br>";
// echo "<br>";
// echo $_SERVER["SERVER_NAME"];
// echo "<br>";
// echo "<br>";
// echo $_SERVER["HTTP_HOST"];
// echo "<br>";
// echo "<br>";
// echo $_SERVER["HTTP_REFERER"];
// echo "<br>";
// echo "<br>";
// echo $_SERVER["HTTP_USER_AGENT"];
// echo "<br>";
// echo "<br>";
// echo $_SERVER["SCRIPT_NAME"];


// $name = "User";
// $value = "NNT";

// setcookie($name, $value, time() + (86400 * 30), "/");

// if (!isset($_COOKIE[$name])) {
//     echo "Cookie ' " . $name . " ' is not set!";
// } else {
//     echo "Cookie ' " . $name . " ' is set! <br>";
//     echo "value is : " . $_COOKIE[$name];
// }
// echo $_COOKIE[$name];

session_start();
$_SESSION["favcolor"] = "123456789";
$_SESSION["favanimal"] = "mewmew";
echo "session variables are set";
