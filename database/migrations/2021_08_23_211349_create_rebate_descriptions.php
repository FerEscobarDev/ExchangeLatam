<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRebateDescriptions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rebate_descriptions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('deposit_id')->unique();
            $table->foreign('deposit_id')
                    ->references('id')
                    ->on('deposits')
                    ->onDelete('cascade')
                    ->onUpdate('cascade');
            $table->double('rebate_comission', 50, 2);
            $table->double('rebate_rate', 50, 2);
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
        Schema::dropIfExists('rebate_descriptions');
    }
}
