<?php

use App\Http\Controllers\Api\productController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/product',[productController::class,'index']);  
Route::get('/product/{id}',[productController::class,'show']);
 Route::post('product',[productController::class,'store']);
Route::put('/product/{id}',[productController::class,'update']);
Route::delete('product/{id}',[productController::class,'destroy']);



Route::post('login', [AuthController::class, 'login'],['middleware' => ['cors']]);
Route::post('logout', [AuthController::class, 'logout']);
Route::post('refresh', [AuthController::class, 'refresh']);
Route::post('me', [AuthController::class, 'me']);
Route::post('/register', [AuthController::class, 'register']);

