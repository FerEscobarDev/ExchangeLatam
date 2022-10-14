<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('transactions', function (Blueprint $table) {
            $table->dropForeign(['trading_account_id']);
            $table->dropColumn('trading_account_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('transactions', function (Blueprint $table) {
            $table->unsignedBigInteger('trading_account_id')->nullable();
            $table->foreign('trading_account_id')
                    ->references('id')
                    ->on('trading_accounts')
                    ->onDelete('set null')
                    ->onUpdate('cascade');
        });
    }
};
