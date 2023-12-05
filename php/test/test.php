<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php
    // ini_set('display_errors', '1');
    // ini_set('display_startup_errors', '1');
    // error_reporting(E_ALL);

    function showErorr($e, $errline, $errfile)
    {
        echo $errfile . "<br>";
        echo $e . "<br>";
        echo $errline;
    }
    // set_error_handler(callback: "showErorr");
    function checkNum($number)
    {
        if ($number > 1) {
            throw new Exception("value must be 1 or below");
        }
        return true;
    }

    try {
        checkNum(3);
        echo "It you see this, the number is 1 or below";
    } catch (Exception $e) {
        echo "message: " . $e->getMessage() . "<br>" . "<br>";
    }

    $txt = "<h6>viết vào file</h6>";
    $myfile = fopen("doc.txt", "w") or die("error");
    fwrite($myfile, $txt);
    $showfile = fopen("doc.txt", "r") or die("error");
    echo fread($showfile, filesize("doc.txt"));
    fclose($showfile);

    ?>
    <div class="menu">
        <?php include "menu.php"; ?>
    </div>
    <h1>Welcome to my home page!</h1>
    <p>Some text.</p>
    <?php include 'footer.php' ?>

    <form action="upload.php" method="post" enctype="multipart/form-data">
        <input type="file" name="fileToUpload" id="fileToUploads">
        <input type="submit" value="Upload File" name="submit">
    </form>

    <?php
    $rootPath = $_SERVER['DOCUMENT_ROOT'];
    echo "Đường dẫn root: " . $rootPath; ?>
</body>

</html>