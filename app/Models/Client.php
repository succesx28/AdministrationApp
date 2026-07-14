<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        "name",
        "last_name",
        "full_number",
        "active",
        "email",
        "business_name",
    ];

    public function reports()
    {
        return $this->hasMany(Report::class, "client_id", 'id');
    }
}
