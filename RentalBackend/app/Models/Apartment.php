<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Apartment extends Model
{
    public function images() {
    return $this->hasMany(ApartmentImage::class);
}
}
