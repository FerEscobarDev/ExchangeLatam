<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\UserController;
use GuzzleHttp\Middleware;
use Illuminate\Routing\RouteGroup;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [CompanyController::class, 'index'])->name('company.index');
Route::get('/about', [CompanyController::class, 'about'])->name('company.about');
Route::get('/faq', [CompanyController::class, 'faq'])->name('company.faq');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [UserController::class, 'dashboard'])->name('user.dashboard');
});

/* Route::prefix('user')->group(function () {
    
});*/
/* Route::group(['middleware' => 'auth', 'verified'], function () {
    Route::get('/dashboard', [UserController::class, 'dashboard'])->name('user.dashboard');
}); */