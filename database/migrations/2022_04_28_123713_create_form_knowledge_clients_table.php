<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormKnowledgeClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('form_knowledge_clients', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->unique();
            $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade')
                    ->onUpdate('cascade');
            $table->date('date');    
            $table->string('citySign', 30);          
            $table->boolean('pep')->default(false);
            $table->boolean('publicFunds')->default(false);
            $table->boolean('tributeCountry')->default(false);
            $table->string('countries', 200)->nullable();           
            $table->boolean('transactionsForeignMoney')->default(false);
            $table->boolean('productsFinancialExt')->default(false);
            $table->boolean('accountsForeignMoney')->default(false);
            $table->boolean('auth_1')->default(false);
            $table->boolean('auth_2')->default(false);
            $table->boolean('sign')->default(false);
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
        Schema::dropIfExists('form_knowledge_clients');
    }
}
