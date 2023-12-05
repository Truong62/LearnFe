<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    function testInput($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    $nameErr = $emailErr = "";
    $name = $email =  "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["fullname"])) {
            $nameErr = "Fullname is Required";
        } else {
            $name = testInput($_POST["fullname"]);
        }

        if (empty($_POST["email"])) {
            $emailErr = "Email is Required";
        } else {
            $email = testInput($_POST["email"]);
        }
    }
    echo "<pre>";
    print_r($_POST, false);
    echo "</pre>";

    // echo "<pre>";
    // print_r($_GET, false);
    // echo "</pre>";
    date_default_timezone_set("Asia/Bangkok");
    echo date_default_timezone_get();

    ?>
    <form action="login.php?Clinet=NNT" method="post">
        <label>Full Name: <input type="text" class="fullname" name="fullname"></label>
        <span style="color: red;" class="error">* <?php echo $nameErr; ?></span>
        <br />
        <br />
        <label>Email: <input type="email" name="email"></label>
        <span style="color: red;" class="error">* <?php echo $emailErr; ?></span>
        <br><br>
        <button type="submit">submit</button>
    </form>

</body>

</html>