<?php

namespace App\Http\Controllers;

use App\Models\DailyReport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Xml\Report;

class ReportController extends Controller
{
    public function index(){
        return Inertia::render('Report/index');
    }

    public function get_reports(Request $request){
        $data = $request->all();

        try {
            $reports = DailyReport::get_reports();
        } catch (\Exception $e) {
            Log::info("error", ["error" => $e->getMessage()]);
            return $e->getMessage();
        }

        return $reports;
    }

    public function create_report(Request $request){


        return true;
    }
}
