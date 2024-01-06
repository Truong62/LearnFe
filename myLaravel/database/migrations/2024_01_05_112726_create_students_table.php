<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->date('dob');
            $table->string('address');
            $table->string('class_name');
            $table->boolean('status')->default(true); // Status mặc định là true
            $table->string('email')->unique();
            $table->string('english_class_name'); // Tên lớp học bằng tiếng Anh
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('students');
    }
}
