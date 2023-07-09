@extends('layouts.app')

@section('content')
@foreach($projetos as $projeto)
    
    <div class="card">
        <div class="card-header">
            <h1>{{$projeto->title}}</h1>
        </div>

        <div class="card-body">
            <h3 class="card-title">Proprietário: {{$projeto->user->name}}</h3>

            <p class="card-text">Descrição: {{$projeto->body}}</p>
        </div>

        <div class="card-footer text-muted">
            <div class="row">
                <div class="col-6">Criado: {{$projeto->created_at}}</div>
                <div class="col-6">Atualizado: {{$projeto->updated_at}}</div>
            </div>
        </div>
</div>
@endforeach

{{ $projetos->links() }}

@endsection
