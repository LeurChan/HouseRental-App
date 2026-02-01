<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('properties', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->string('type'); // Apartment, Penthouse, Duplex
        $table->integer('price'); // Rent or Sale price
        $table->string('location');
        $table->integer('bedrooms');
        $table->integer('washrooms');
        $table->integer('floor');
        $table->text('description');
        $table->string('thumbnail'); 
        $table->string('category'); // "Sale" or "Rent"
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
