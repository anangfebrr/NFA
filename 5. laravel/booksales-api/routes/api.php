<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware(['auth:api'])->group(function() {
    // Transaction API
    Route::apiResource('/transactions', TransactionController::class)->only(['store', 'update', 'show', 'index']);
    
    Route::middleware(['role:admin'])->group(function(){
        Route::apiResource('/authors', AuthorController::class)->only(['store', 'update', 'show']);
        Route::apiResource('/books', BookController::class)->only(['store', 'update', 'show']);
        Route::apiResource('/genres', GenreController::class)->only(['store', 'update', 'show']);
        Route::apiResource('/transactions', TransactionController::class)->only(['update', 'destroy']);
    });
});

// Auth
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');

// Authors API
Route::apiResource('/authors', AuthorController::class)->only(['index', 'show']);

// Books API
Route::apiResource('/books', BookController::class)->only(['index', 'show']);

// Genres API
Route::apiResource('/genres', GenreController::class)->only(['index', 'show']);

