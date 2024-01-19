<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body>
    @if(session('error'))
    <div class=" alert alert-primary" style="width: 100%; top: 0 ;position: absolute;">
        <h4 style="color: red;">error</h4>
    </div>
    @endif
    <div class="sub">Login</div>
    <div class="form-login">
        <form action="/login" method="post">
            <h1>Username</h1>
            <input type="text" name="nameUser" placeholder="input user name..." autocomplete="off">
            <h1>Password</h1>
            <input type="password" name="password" placeholder="input password..." autocomplete="off">
            @csrf
            <br>
            <div class="buttom-sumit">
                <button type="submit">Sign up</button>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</body>

</html>