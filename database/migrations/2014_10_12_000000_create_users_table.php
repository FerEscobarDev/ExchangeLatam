<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('lastname', 50);
            $table->string('doc_type', 25)->nullable();
            $table->unsignedBigInteger('doc_num')->unique()->nullable();
            $table->unsignedBigInteger('mobil')->unique();
            $table->string('departament', 30);
            $table->string('city', 45);
            $table->string('address', 50);
            $table->string('email', 45)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('picture', 70)->nullable();
            $table->integer('verified');
            $table->integer('info_ok');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
