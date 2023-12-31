@extends('layouts.app')
@section('content')

<div class="row">
    <div class="col-lg-12 margin-tb">
        <div class="pull-left">
            <h2>Crie um novo Projeto</h2>
        </div>
    </div>
</div>
@if($errors->any())
<div class="alert alert-danger">
    <strong>Ops!</strong> Há um problema com os dados inseridos: <br><br>
    <ul>
        @foreach($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
    </ul>
</div>
@endif
<form action="{{ route('projetos.store') }}" method="POST">
    @csrf

    <div class="row">
        <div class="col">
            <div class="form-group">
                <strong>Title:</strong>
                <input type="text" name="title" class="form-control" value="{{ old('title') }}" required maxlength="150">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <strong>Body:</strong>
                <textarea class="form-control" name="body" required>{{ old('body') }}</textarea>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col text-center">
            <button type="submit" class="btn col btn-primary">Criar</button>
        </div>
    </div>

</form>



@endsection