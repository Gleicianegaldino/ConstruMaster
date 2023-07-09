<?php

namespace App\GraphQL\Mutations;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateUser
{
    public function __invoke($rootValue, array $args)
    {
        // Crie o usuário com base nos argumentos recebidos
        $user = new User();
        $user->name = $args['name'];
        $user->email = $args['email'];
        $user->password = Hash::make($args['password']);
        $user->save();

        // Retorne o usuário criado
        return $user;
    }
}
