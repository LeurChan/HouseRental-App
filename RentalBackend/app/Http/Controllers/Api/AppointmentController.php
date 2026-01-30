<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming mobile request
        $validated = $request->validate([
            'apartment_id'   => 'required|exists:apartments,id',
            'tenant_name'    => 'required|string|max:255',
            'tenant_phone'   => 'required|string',
            'appointment_date' => 'required|date',
        ]);

        // Save to database
        $appointment = Appointment::create($validated);

        return response()->json([
            'message' => 'Appointment booked successfully!',
            'data' => $appointment
        ], 201);
    }
}