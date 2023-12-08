<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $t = date("H");
    echo "<p> THe hour (of the server) is " . $t;
    echo ", and will give the follwing message:</p>";
    if ($t < "10") {
        echo "Have a good morning!";
    } else if ($t < "20") {
        echo "Have a good day!";
    } else {
        echo "Have a good night!";
    }
    ?>

</body>

</html>