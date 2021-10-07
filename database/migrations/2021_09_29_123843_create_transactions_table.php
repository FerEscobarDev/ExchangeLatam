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
            $table->unsignedBigInteger('transactionable_id');
            $table->string('transactionable_type');
            $table->primary(['transactionable_id', 'transactionable_type']);
            $table->unsignedBigInteger('report_id');
            $table->foreign('report_id')
                                    ->references('id')
                                    ->on('reports')
                                    ->onDelete('cascade')
                                    ->onUpdate('cascade');
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
        Schema::dropIfExists('transactions');
    }
}
