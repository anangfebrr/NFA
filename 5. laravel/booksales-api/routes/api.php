<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware(['auth:api'])->group(function() {
    Route::middleware(['role:admin'])->group(function(){
        Route::apiResource('/books', BookController::class)->only(['store', 'update', 'show']);
        Route::apiResource('/genres', GenreController::class)->only(['store', 'update', 'show']);
        Route::apiResource('/authors', AuthorController::class)->only(['store', 'update', 'show']);
    });
});

// Authors API
Route::apiResource('/authors', AuthorController::class)->only(['index', 'show']);

// Books API
Route::apiResource('/books', BookController::class)->only(['index', 'show']);

// Genres API
Route::apiResource('/genres', GenreController::class)->only(['index', 'show']);

// Auth
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');
