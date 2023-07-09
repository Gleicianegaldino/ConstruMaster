<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Projeto;

class HomeController extends Controller
{
    

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $projetos =  Projeto::orderBy('created_at', 'asc')->paginate(10);
        return view('home', compact('projetos'));
    }
}
