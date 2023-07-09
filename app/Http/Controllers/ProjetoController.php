<?php

namespace App\Http\Controllers;

use App\Models\Projeto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class ProjetoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {    
        $projetos = Projeto::where('user_id', Auth::id())->orderBy('created_at','asc')->paginate(100);
        
        return view('projetos.index', compact('projetos'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('projetos.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => ['required', 'unique:projetos', 'max:150'],
            'body' => ['required'],
        ]);

        $projeto = new Projeto($validatedData);
        $projeto->user_id = Auth::id();
        $projeto->save();
        return redirect('projetos')->with('success', 'Projeto criado com sucesso!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Projeto $projeto)
    {
        return view('projetos.show', compact('projeto'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Projeto $projeto)
    {
        if($projeto->user_id === Auth::id())
        {
            return view('projetos.edit',compact('projeto'));
        } else
        {
            return redirect()->route('projetos.index')->with('error', "Você não é o autor do projeto")->withInput();
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Projeto $projeto)
    {
        $validatedData = $request->validate([
            'title' => ['required', Rule::unique('projetos')->ignore($projeto), 'max:150'],
            'body' => ['required'],
        ]);

        if($projeto->user_id === Auth::id())
        {
            $projeto->update($request->all());
            return redirect()->route('projetos.index')->with('success', 'Projeto editado com sucesso!');
        } else
        {
            return redirect()->route('projetos.index')>with('error', "Você não é o autor do projeto")->withInput();
        }
       
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Projeto $projeto)
    {
       if($projeto->user_id === Auth::id())
        {
            $projeto->delete();
            return redirect()->route('projetos.index')->with('success', 'Projeto excluído!');
        } else 
        {
            return redirect()->back()->with('error', "Você não é o autor do projeto")->withInput();
        }
    }
}
