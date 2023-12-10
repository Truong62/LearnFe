<?php
$user = 'nnt';
$password = '123456';
$db = 'truongdev';
$host = 'localhost';
$port = 3333;

$conn = new mysqli($host, $user, $password, $db, $port);

if ($conn->connect_error) {
    die("error");
}
echo "Connected successfully <br>";

$crdb = "CREATE database if not exists truongdev ";
if ($conn->query($crdb) === TRUE) {
    echo "okkkkkk <br>";
} else {
    echo " huhuhuhuhu";
}

$sql = "create table if not exists Sneaker(
	Name_sneaker varchar(200) not null, 
	Quantity int not null,
	Brand varchar(35) not null,
	Color varchar(50) not null,
	Origin varchar(26) not null,
	Material varchar(50) not null,
	Status_Sneaker varchar(35) not null,
    Product_Code varchar(20) primary key not null,
    Price int not null,
	Size varchar(50) not null
);";

$sql1 = "drop table NNT ";

if ($conn->query($sql) === TRUE) {
    echo "Table created successfully  <br>";
} else {
    echo "Error creating table: " . $conn->error;
}
// $insetValue = "insert into Sneaker(Name_sneaker,Quantity,Brand,Color,Origin,Material,Status_Sneaker,Product_Code,Price,Size) values
// ('Nike Air Force 1',432, 'NIKE','White','America','Premium leather','Stocking','THN001',3990000,'36, 37, 38,39, 40, 41, 42, 43'),
// ('Nike Air Force 1 Shadow',123, 'NIKE','Orange white ','America','Premium leather','Stocking','THN002',2500000,'36, 37, 38,39, 40, 41, 42, 43'),
// ('Nike Air Force 1 Premium',314, 'NIKE','Light brown ','America','Premium leather','Stocking','THN003',8500000,'36, 37, 38,39, 40, 41, 42, 43'),
// ('Nike Air Force 1 Mid',241, 'NIKE','Gray White ','America','Premium leather','Stocking','THN004',5500000,'36, 37, 38,39, 40, 41, 42, 43'),
// ('Nike Air Force 1 PLT.AF.ORM',321, 'NIKE','Green white ','America','Premium leather','Stocking','THN005',4500000,'36, 37, 38,39, 40, 41, 42, 43'),
// ('Nike Cortez All Petals United',500, 'NIKE','White ','America','Premium leather','Stocking','THN006',4300000,'36, 37, 38,39, 40, 41, 42, 43'),
// ('Nike Cortez Union Light Smoke',233, 'NIKE','Gray ','America','Premium leather','Stocking','THN007',4100000,'36, 37, 38,39, 40, 41, 42, 43');";

// if ($conn->query($insetValue) === TRUE) {
//     echo " successfully  <br>";
// } else {
//     echo "Error creating table: " . $conn->error;
// }
