<!DOCTYPE html>
<html>
<head>
    <title>Hiển thị dữ liệu</title>
</head>
<body>
    <h1>Dữ liệu từ bảng TenBang</h1>
    <ul>
        @foreach($du_lieu as $item)
            <li>{{ $item->name }}</li>
        @endforeach
    </ul>
</body>
</html>
