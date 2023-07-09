@extends('layouts.app')
@section( 'content')

    <div class="row">
        <div class="col">
            <div class="pull-left">
                <h2>Projeto</h2>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <strong>Id:</strong>
                {{ $projeto->id }}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <strong>Titulo</strong>
                {{ $projeto->title }}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <strong>Descrição:</strong>
                {{ $projeto->body }}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <strong>Proprietário:</strong>
                {{ $projeto->user->name }}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <strong>Atualizado em:</strong>
                {{ $projeto->updated_at }}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <strong>Criado em:</strong>
                {{ $projeto->created_at }}
            </div>
        </div>
    </div>


@endsection