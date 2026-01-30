<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Apartment;

class ApartmentController extends Controller
{
    public function index()
    {
        // Eager load images to avoid slow mobile performance
        $apartments = Apartment::with('images')->get();

        return response()->json($apartments->map(function($apt) {
            return [
                'id' => $apt->id,
                'unit' => $apt->unit_number,
                'price' => (int)$apt->price, // Enforcing your integer rule
                'description' => $apt->description,
                // Converting relative paths to full URLs for the phone
                'photos' => $apt->images->map(fn($img) => asset('storage/' . $img->image_path))
            ];
        }));
    }
}