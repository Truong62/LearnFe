<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <!-- <script src="../../js/Student.js"></script> -->
    <!-- <link rel="stylesheet" href="{{ asset('css/style.css') }}"> -->

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
        @if(session('success'))
        <div class=" alert alert-primary position-absolute" style="width: 100%;">
            {{ session('success') }}
        </div>
        @endif
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const successMessage = document.querySelector('.alert');
                if (successMessage) {
                    setTimeout(function() {
                        successMessage.style.display = 'none';
                    }, 2000);
                }
            });
        </script>
        <div id="app" class="container p-5">
            <div class="mb-5 d-flex justify-content-between">
                <h2><a href="/students" class="text-dark text-decoration-none">List Students</a></h2>
                <div class="row g-3 form-search">
                    <div class="col-auto">
                        <h2>Search</h2>
                    </div>
                    <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden"></label>
                        <input type="text" class="form-control input-search" id="inputPassword2" v-model="searchKeyword" @input="search" placeholder="Input Name Student...">
                    </div>
                </div>
                <form action="/students/create" method="get">
                    @method('GET')
                    @csrf
                    <button type="submit" class="btn btn-success">CREATE</button>
                </form>
            </div>
            <div v-if="students.length > 0">
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
                        <tr v-for="student in students" :key="student.id">
                            <th scope="row">@{{ student.id }}</th>
                            <td>@{{ student.full_name }}</td>
                            <td>@{{ student.dob }}</td>
                            <td>@{{ student.address }}</td>
                            <td>@{{ student.class_name }}</td>
                            <td>@{{ student.phone }}</td>
                            <td>@{{ student.status }}</td>
                            <td>@{{ student.email }}</td>
                            <td class="d-flex justify-content-center">
                                <form :action="'/students/update/' + student.id" method="get">
                                    @method('GET')
                                    @csrf
                                    <button type="submit" class="btn btn-warning">UPDATE</button>
                                </form>
                                <form :action="'/students/delete/' + student.id" method="get">
                                    @csrf
                                    <button type="submit" class="btn btn-danger text-dark">DELETE</button>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>
                <div class="text-center text-danger">
                    <h1>No data</h1>
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

        <script>
            new Vue({
                el: '#app',
                data: {
                    searchKeyword: '',
                    students: []
                },
                methods: {
                    search() {
                        axios.get('/students', {
                                params: {
                                    search: this.searchKeyword
                                }
                            })
                            .then(response => {
                                this.students = response.data;
                                console.log("this.students");
                            })
                            .catch(error => {
                                console.error("error");
                            });
                    }
                },
                mounted() {
                    axios.get('/students')
                        .then(response => {
                            this.students = response.data;
                        })
                        .catch(error => {
                            console.error("error");
                        });
                }
            });
        </script>

    </body>

    </html>

</body>

</html>