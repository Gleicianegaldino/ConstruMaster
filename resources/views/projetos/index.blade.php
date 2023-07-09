@extends('layouts.app')
@section('content')

<div class="mx-auto" style="width: 800px;">

	<div class="row">
        <div class="col">
            <div class="pull-left">
                <h2>Projetos Index</h2>
            </div>            
        </div>
    </div>

    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    @if (session('error'))
        <div class="alert alert-danger">
            {{ session('error') }}
        </div>
    @endif
   
   
    <table class="table table-bordered">
        <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Criado em:</th>
            <th>Atualizado em:</th>            
            <th>Ações</th>
        </tr>
        @foreach ($projetos as $projeto)
        <tr>
            <td>{{ $projeto->id }}</td>
            <td>
                <a href="{{ url("/projetos/{$projeto->id}")  }}">
                    {{$projeto->title}}
                </a>
            </td>
            <td>{{ $projeto->created_at }}</td>
            <td>{{ $projeto->updated_at }}</td>            
            
            <td>
                <form action="{{ route('projetos.destroy',$projeto->id) }}" method="POST">   
                    <a class="btn btn-info" href="{{ route('projetos.show',$projeto->id) }}">Visualizar</a> 
                       
                    <a class="btn btn-primary" href="{{ route('projetos.edit',$projeto->id) }}">Editar</a>   
                    @csrf
                    @method('DELETE')      
                    <button type="submit" class="btn btn-danger">Excluir</button>
                </form>
            </td>
        </tr>
        @endforeach
    </table>
    
</div>

@endsection