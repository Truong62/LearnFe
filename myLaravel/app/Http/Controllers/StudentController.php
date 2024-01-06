<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
class StudentController extends Controller
{
    public function create()
    {
        return view('student.create');
    }
    public function store(Request $request){
        
        $data = $request->validate([
            'full_name' => 'required',
            'dob' => 'required',
            'address' => 'required',
            'class_name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'status' => 'required',
        ]);
        var_dump (Student::create($data));
        die;
        
        return "success create Student";
    }
}
