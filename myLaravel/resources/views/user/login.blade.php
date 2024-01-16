<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    @if(session('error'))
    <p style="color: red;">{{ session('error') }}</p>
    @endif
    <form action="/login" method="post">
        <h1>Username</h1>
        <input type="text" name="nameUser">
        <h1>Password</h1>
        <input type="password" name="password">
        @csrf
        <br>
        <button type="submit">Login</button>
    </form>
</body>

</html>