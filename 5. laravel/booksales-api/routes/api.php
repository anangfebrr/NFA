<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Authors API
Route::apiResource('/authors', AuthorController::class);

// Books API
Route::apiResource('/books', BookController::class);

// Genres API
Route::apiResource('/genres', GenreController::class);