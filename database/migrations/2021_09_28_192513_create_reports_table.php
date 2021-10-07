<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('report_type_id')->nullable();
            $table->foreign('report_type_id')
                            ->references('id')
                            ->on('report_types')
                            ->onDelete('set null')
                            ->onUpdate('cascade');
            $table->unsignedBigInteger('month_id')->nullable();
            $table->foreign('month_id')
                            ->references('id')
                            ->on('months')
                            ->onDelete('set null')
                            ->onUpdate('cascade');
            $table->year('year');
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
        Schema::dropIfExists('reports');
    }
}
