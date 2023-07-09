<?php

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use App\Models\User;

class LoginTest extends TestCase
{
    use DatabaseTransactions;

    public function testLogin()
    {
        // Cria um usuário de teste
        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('password')
        ]);

        // Faz uma requisição POST para a rota de login
        $response = $this->post('/login', [
            'email' => 'test@example.com',
            'password' => 'password'
        ]);

        // Verifica se o usuário está autenticado
        $this->assertAuthenticatedAs($user);

        // Verifica se o redirecionamento ocorreu com sucesso
        $response->assertRedirect('/home');
    }
}
