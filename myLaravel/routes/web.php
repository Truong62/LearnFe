<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/students/create', [StudentController::class, 'create']);
Route::post('/students/store', [StudentController::class, 'store']); 

Route::get('/students', [StudentController::class, 'index']);

Route::get('/students/update/{id}', [StudentController::class, 'edit']);
Route::post('/students/update/{id}', [StudentController::class, 'update']);

Route::get('/students/delete/{id}', [StudentController::class, 'delete']);

Route::get('/login', [UserController::class, 'showLoginForm']);
Route::post('/login', [UserController::class, 'login']);
