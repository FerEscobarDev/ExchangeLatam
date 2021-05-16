<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDollarPurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dollar_purchases', function (Blueprint $table) {
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
            $table->string('type', 30);
            $table->double('price_usd', 50, 2);
            $table->double('monto_usd', 50, 2);
            $table->double('monto_cop', 50, 2);
            $table->double('iva', 50,2);
            $table->double('cuatro_por_mil', 50,2);
            $table->double('total', 50, 2);
            $table->string('voucher', 80);
            $table->dateTime('date');
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
        Schema::dropIfExists('dollar_purchases');
    }
}
