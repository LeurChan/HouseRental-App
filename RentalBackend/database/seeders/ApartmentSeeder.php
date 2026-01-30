<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Apartment;
use App\Models\ApartmentImage;

class ApartmentSeeder extends Seeder
{
    public function run(): void
    {
        // Apartment 1
        $apt1 = Apartment::create([
            'unit_number' => 'A-101',
            'price' => 550, // No dots/decimals
            'status' => 'available',
            'description' => 'Modern studio with a great city view.'
        ]);

        ApartmentImage::create(['apartment_id' => $apt1->id, 'image_path' => 'rooms/room1.jpg']);
        ApartmentImage::create(['apartment_id' => $apt1->id, 'image_path' => 'rooms/room2.jpg']);

        // Apartment 2
        $apt2 = Apartment::create([
            'unit_number' => 'B-205',
            'price' => 1200,
            'status' => 'available',
            'description' => 'Luxury 2-bedroom apartment near the mall.'
        ]);

        ApartmentImage::create(['apartment_id' => $apt2->id, 'image_path' => 'rooms/room3.jpg']);
        ApartmentImage::create(['apartment_id' => $apt2->id, 'image_path' => 'rooms/room4.jpg']);
    }
}