<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


// Any Slug return welcome blade
Route::any('{slug}', function(){
    return view('welcome');
});