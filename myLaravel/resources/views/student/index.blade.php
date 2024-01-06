<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</head>

<body>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <div class="container p-5">
            <div class="mb-5 d-flex justify-content-between">
                <h2>List Studens</h2>
                <button type="button" class=" btn btn-primary"><a class="text-dark text-decoration-none" href="/students/create">Create</a></button>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">FULL NAME</th>
                        <th scope="col">AGE</th>
                        <th scope="col">ADDRESS</th>
                        <th scope="col">CLASS</th>
                        <th scope="col">PHONE</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col" class="d-flex justify-content-center ">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($students as $students)
                    <tr class="m-1">
                        <th scope="row">{{ $students->id }}</th>
                        <td>{{$students->full_name}}</td>
                        <td>{{$students->dob}}</td>
                        <td>{{$students->address}}</td>
                        <td>{{$students->class_name}}</td>
                        <td>{{$students->phone}}</td>
                        <td>{{$students->status}}</td>
                        <td>{{$students->email}}</td>
                        <td class="d-flex justify-content-center">
                            <form action="/students/update/{{$students->id}}" method="get">
                                @csrf
                                <button type="submit" class="btn btn-warning">UPDATE</button>
                            </form>
                            <form action="/students/delete/{{$students->id}}" method="get">
                                @csrf
                                <button type="submit" class="btn btn-danger text-dark">DELETE</button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    </body>

    </html>

</body>

</html>