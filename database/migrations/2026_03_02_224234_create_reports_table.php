<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->string("code")->index();
            $table->integer("type")->default(1)->index(); //si el tipo es 1 es un reporte normal de la frecuencia q se pide (si es 2 es un reporte de emergencia de un altercado q pasa)
            $table->integer("detail_id")->index();
            $table->date("date")->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('daily_reports');
    }
};
