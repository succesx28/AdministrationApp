<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        return Inertia::render('UsersAdmin/index');
    }

    public function get_users(Request $request){

    }
}
