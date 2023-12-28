<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    // echo "<h2>PHP is Fun!</h2>";
    // echo "Hello world!<br>";
    // echo "I'm about to learn PHP!<br>";
    // echo "This ", "string ", "was ", "made ", "with multiple
    // parameters.";
    $servername='localhost';
    $username='root';
    $password='root';
    $dbname='mysql';
    $conn= new mysqli($servername,$username,$password,$dbname);
    if($conn){
        echo "...."; 
    }

    ?>
</body>

</html>