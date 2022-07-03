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
            $table->string('name', 150);
            $table->string('lastname', 150);
            $table->unsignedBigInteger('mobil')->unique();
            $table->string('email', 45)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('picture', 70)->nullable();            
            $table->integer('active')->default(0);
            $table->rememberToken();
            $table->foreignId('current_team_id')->nullable();
            $table->string('profile_photo_path', 2048)->nullable();
            $table->timestamps();
        });

        Schema::create('data_users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->unique();
            $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade')
                    ->onUpdate('cascade');
            $table->integer('doc_type')->default(0);
            $table->unsignedBigInteger('doc_num')->unique();
            $table->string('departament', 30);
            $table->string('city', 60);
            $table->string('address', 150)->nullable();
            $table->date('expeditionDate')->nullable();
            $table->string('expeditionPlace', 30)->nullable();  
            $table->date('birthDate')->nullable();          
            $table->string('birthPlace', 30)->nullable();          
            $table->string('nationality', 30)->nullable();
            $table->string('vip', 4)->nullable()->default('no');
            $table->timestamps();
        });

        Schema::create('requirement_users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->unique();
            $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade')
                    ->onUpdate('cascade');            
            $table->integer('verified')->default(0);
            $table->integer('info_ok')->default(0);
            $table->string('policy', 10)->default('declined');
            $table->string('terms', 10)->default('declined');            
            $table->integer('formFunds')->default(0);
            $table->integer('formKnowledge')->default(0);
            $table->integer('exported')->default(0)->nullable();
            $table->timestamps();
        });

        Schema::create('financial_data_users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->unique();
            $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade')
                    ->onUpdate('cascade');          
            $table->integer('income');
            $table->integer('expenses');
            $table->integer('assets');           
            $table->integer('liabilities');
            $table->integer('heritage');
            $table->integer('incomeOther')->nullable()->default(0);
            $table->mediumText('descriptionIncome')->nullable();  
            $table->timestamps();
        });
        /* Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->string('lastname', 150);
            $table->string('doc_type', 25)->nullable();
            $table->unsignedBigInteger('doc_num')->unique()->nullable();
            $table->unsignedBigInteger('mobil')->unique();
            $table->string('departament', 30)->nullable();
            $table->string('city', 60)->nullable();
            $table->string('address', 150)->nullable();
            $table->string('email', 45)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('picture', 70)->nullable();
            $table->integer('verified')->default(0);
            $table->integer('info_ok')->default(0);
            $table->string('vip', 4)->nullable()->default('no');
            $table->string('policy', 10)->default('accepted');
            $table->string('terms', 10)->default('accepted');
            $table->integer('exported')->default(0)->nullable();
            $table->rememberToken();
            $table->foreignId('current_team_id')->nullable();
            $table->string('profile_photo_path', 2048)->nullable();
            $table->timestamps();
        }); */
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('data_user');
        Schema::dropIfExists('requirement_user');
        Schema::dropIfExists('financial_data_user');
    }
}
