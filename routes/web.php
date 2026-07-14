<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->group(function () {

    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile', 'edit')->name('profile.edit');
        Route::patch('/profile', 'update')->name('profile.update');
        Route::delete('/profile', 'destroy')->name('profile.destroy');
    });

    Route::controller(\App\Http\Controllers\ReportController::class)->group(function () {
        Route::get('/reports', 'index')->name('reports');
        Route::post('/get-reports', 'get_reports')->name('get_reports');
        Route::get('/last-activities', 'index_last_activities')->name('last_activities');
    });
    Route::controller(\App\Http\Controllers\MemberController::class)->group(function () {
        Route::get('/members', 'index')->name('members');
    });
    Route::controller(\App\Http\Controllers\TaskController::class)->group(function () {
        Route::get('/pendings', 'index')->name('pendings');
    });

    Route::middleware('admin')->group(function () {
        Route::controller(UserController::class)->group(function () {
            Route::get('/users', 'index')->name('admin.users');
        });
    });

});

require __DIR__.'/auth.php';
