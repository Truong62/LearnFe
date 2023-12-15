<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <style>
        .img-item {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 25px;
            padding: 25px;
        }

        .item>img {
            height: 200px;
            width: 250px;
            /* object-fit: cover; */
            flex-shrink: 0;
        }
    </style>
</head>

<body>
    <?php
    $cameras = [
        [
            "name" => "Canon SX730 HS (Hàng Nhập Khẩu)",
            "price" => "7.690.000 ₫",
            "img" => "https://binhminhdigital.com/StoreData/Product/10451/May-anh-Canon--PowerShot-SX730-HS--Den--jpg.jpg"
        ],
        [
            "name" => "Canon SX720 HS (Hàng Nhập Khẩu)",
            "price" => "6.290.000 ₫",
            "img" => "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81MK3mB6XIL._AC_UF894,1000_QL80_.jpg"
        ],
        [
            "name" => "Canon G9X Mark II (Hàng Nhập Khẩu)",
            "price" => "9.490.000 ₫",
            "img" => "https://camerabox.vn/uploads/shops/camera/canon-camera/2017/canon-powershot-g9-x-mark-ii/canon-powershot-g9-x-mark-ii-1.png"
        ],
        [
            "name" => "Canon PowerShot G3 X (Lê Bảo Minh)",
            "price" => "16.990.000 ₫",
            "img" => "https://p1.akcdn.net/full/327883735.canon-powershot-g3-x-aj0106c002aa.jpg"
        ],
        [
            "name" => "Canon SX 620 HS (Hàng Nhập Khẩu)",
            "price" => "4.890.000 ₫",
            "img" => "https://p1.akcdn.net/full/327883735.canon-powershot-g3-x-aj0106c002aa.jpg"
        ],
    ];
    ?>
    <div class="container  ">
        <div class="img-item grid grid-cols-3">
            <?php foreach ($cameras as $camera) : ?>
                <div class="item">
                    <img src="<?= $camera['img'] ?>" alt="<?= $camera['name'] ?>" width="200">
                    <div>
                        <p> <?= $camera['name'] ?></p>
                        <p> <?= $camera['price'] ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

</body>

</html>