<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    protected $fillable = [
        "name",
        "contact_name",
        "contact_number",
        "contact_email",
        "is_active"
    ];
}
