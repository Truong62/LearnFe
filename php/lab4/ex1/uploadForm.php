<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="upload.php" method="post" enctype="multipart/form-data">
        <input type="file" name="fileToUpload" id="fileToUploads">
        <input type="submit" value="Upload File" name="submit">
    </form>

    <?php
    $rootPath = $_SERVER['DOCUMENT_ROOT'];
    echo "Đường dẫn root: " . $rootPath; ?>
</body>
</html>