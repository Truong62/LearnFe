<?php

namespace App\Http\Controllers;

use App\Models\students;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function hienThiDuLieu()
    {
        $du_lieu = students::all(); 

        return view('ten_view')->with('du_lieu', $du_lieu);
    }
}
