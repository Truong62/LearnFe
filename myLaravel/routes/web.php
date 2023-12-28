<?php

use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Termwind\Components\Dd;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    $test =  DB::select("select * from students");
    dd($test);
});
Route::get('/show', [StudentController::class, 'hienThiDuLieu'])->name('hien-thi-du-lieu');
Route::get('/connection', function () {
    try {
        DB::connection();

        return view('connection.success');
    } catch (Exception $e) {
        return view('connection.fail', [
            'error' => $e->getMessage(),
        ]);
    }
});