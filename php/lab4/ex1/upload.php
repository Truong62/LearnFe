<?php
$target_dir = '../uploads/';

if (!is_dir($target_dir)) {
    mkdir($target_dir, 0777, true);
}

$target_file = $target_dir . basename(($_FILES["fileToUpload"]["name"]));
echo $target_file . "<br>";

$upload0k = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

if (isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if ($check !== false) {
        echo "File is an iamage - " . $check["mime"] . ". <br>";
        $upload0k = 1;
    } else {
        echo "file s not image";
        $upload0k = 0;
    }
}
if ($upload0k === 1) {
    move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_dir . $_FILES["fileToUpload"]["name"]);
    echo "xong <br> <br> <br>";
}


$dir = opendir('../uploads');
echo "$dir" . "<br>";
while (($file = readdir($dir)) !== false) {
    if (pathinfo($file, PATHINFO_EXTENSION) == 'jpg' || pathinfo($file, PATHINFO_EXTENSION) == 'png') {

        $src = '../uploads/' . $file;

        echo '<img style="height: 350px" src="' . $src . '">';
        echo "$file" . "<br>";
    }
}

closedir($dir);
