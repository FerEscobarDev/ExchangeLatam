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
        Schema::table('requirement_users', function (Blueprint $table) {
            $table->integer('document')->default(0)->after('terms');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('requirement_users', function (Blueprint $table) {
            $table->dropColumn('document');
        });
    }
};
