<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApartmentController;
use App\Http\Controllers\Api\AppointmentController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/apartments', [ApartmentController::class, 'index']);

Route::post('/appointments', [AppointmentController::class, 'store']);
