<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('set null')
                    ->onUpdate('cascade');
            $table->unsignedBigInteger('account_id')->nullable();
            $table->foreign('account_id')
                    ->references('id')
                    ->on('accounts')
                    ->onDelete('set null')
                    ->onUpdate('cascade');
            $table->unsignedBigInteger('trading_account_id')->nullable();
            $table->foreign('trading_account_id')
                    ->references('id')
                    ->on('trading_accounts')
                    ->onDelete('set null')
                    ->onUpdate('cascade');
            $table->integer('type');
            $table->integer('price');
            $table->double('amount_usd', 50, 2);
            $table->double('amount_cop', 50, 2);
            $table->double('comission', 50, 2);
            $table->double('cuatro_por_mil', 50, 2);
            $table->double('iva', 50, 2);
            $table->double('rebate', 50, 2);
            $table->double('total', 50, 2);
            $table->string('status', 20)->default('Pendiente');
            $table->string('voucher', 100)->nullable();
            $table->string('comment', 150)->nullable();
            $table->dateTime('application_date');
            $table->dateTime('expiration_date');
            $table->dateTime('completed_date')->nullable();
            $table->timestamps();
        });
        
        /* Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('transactionable_id');
            $table->string('transactionable_type');
            /* $table->primary(['transactionable_id', 'transactionable_type']); 
            $table->unsignedBigInteger('report_id');
            $table->foreign('report_id')
                                    ->references('id')
                                    ->on('reports')
                                    ->onDelete('cascade')
                                    ->onUpdate('cascade');
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
        Schema::dropIfExists('transactions');
    }
}
