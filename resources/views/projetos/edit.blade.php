@extends('layouts.app')
@section( 'content')

<div class="row">
    <div class="col">
        <div class="pull-left">
            <h2> Editar Projeto</h2>
        </div>
    </div>
</div>
@if($errors->any())
        <div class="alert alert-danger">
            <strong>Ops!</strong>Há um problema com os dados inseridos: <br><br>
            <ul>
                @foreach($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
<form action="{{ route('projetos.update',$projeto->id) }}" method="POST">
    @csrf
    @method('PUT')

    <div class="row">
        <div class="col">
            <div class="form-group">
                <strong>Title:</strong>
                <input type="text" name="title" class="form-control" 
                value="{{ $projeto->title }}" required>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <strong>Body:</strong>
                <textarea class="form-control" name="body" requerid maxlength="150"> {{ $projeto->body }}</textarea>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col text-center">
            <button type="submit" class="btn col btn-primary"> Update</button>
        </div>
    </div>

</form>




@endsection