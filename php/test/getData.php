<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
    <?php

    $user = 'nnt';
    $password = '123456';
    $db = 'truongdev';
    $host = 'localhost';
    $port = 3333;

    $conn = new mysqli($host, $user, $password, $db, $port);

    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["delete"])) {
        $id_user = $_POST['delete'];
        $delete = "DELETE FROM sneaker WHERE Product_Code = '$id_user'";
        if (!$conn->query($delete) === TRUE) {
            echo "Error deleting record: " . $conn->error;
        }
    }

    $getData = "select * from sneaker";
    $result = $conn->query($getData);
    if ($result->num_rows > 0) {
        echo "<table class='container'> <tr> <th>name</th><th>Price</th><th>Code</th><th>ACTION</th> </tr>";
        while ($row = $result->fetch_assoc()) {
            echo "<tr> <td>" . $row["Name_sneaker"] . "</td> <td>" . $row["Price"] . "</td> <td>" . $row["Product_Code"] . "</td> 
            <td>
                <form action='#' method='post'>
                    <input type='hidden' name='delete' value='" . $row['Product_Code'] . "'>
                    <button type='submit' class='btn btn-danger'>Delete</button>
                </form>
            </td></tr>";
        }
        echo "</table>";
    } else {
        echo "0 results";
    }



    $conn->close();
    ?>

</body>

</html>