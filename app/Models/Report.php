<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $fillable = [
        "code",
        "type", //Orden normal //orden de emergencia ( prioritaria ) // orden de proveedor
        "title",
        "status",
        "detail_id",
        "date"
    ];

    public function detail()
    {
        return $this->hasOne(ReportDetail::class, 'id', 'detail_id');
    }

}
