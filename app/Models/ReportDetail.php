<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReportDetail extends Model
{
    protected $fillable = [
        'type',
        'description',

    ];

    public function report()
    {
        return $this->belongsTo(Report::class, 'detail_id', 'id');
    }
}
