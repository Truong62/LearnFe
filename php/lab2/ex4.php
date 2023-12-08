<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    function Sum($x, $y)
    {
        $z = $x + $y;
        return $z;
    }
    echo "5 +10 = " . Sum(5, 10) . "<br>";
    echo "7 +13 = " . Sum(7, 13) . "<br>";
    echo "2 +4 = " . Sum(2, 4) . "<br>";
    ?>
</body>

</html>