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
        if(Schema::hasTable('deposits') && Schema::hasColumn('deposits', 'user_id') && Schema::hasColumn('deposits', 'account_id')){
            Schema::table('deposits', function (Blueprint $table){
                $table->dropForeign(['user_id']);
                $table->dropColumn('user_id');
                $table->dropForeign(['account_id']);
                $table->dropColumn('account_id');
            });
        }
        if(Schema::hasTable('rebate_descriptions')){
            Schema::table('rebate_descriptions', function (Blueprint $table){
                $table->dropForeign(['deposit_id']);
            });
        }
        Schema::dropIfExists('deposits');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('deposits', function (Blueprint $table) {
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
            $table->string('fbs_account', 20);
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
        if(Schema::hasTable('rebate_descriptions')){
            Schema::table('rebate_descriptions', function (Blueprint $table){
                $table->foreign(['deposit_id'])
                    ->references('id')
                    ->on('deposits')
                    ->onDelete('set null')
                    ->onUpdate('cascade');;
            });
        }
    }
};
