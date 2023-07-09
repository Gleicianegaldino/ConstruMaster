<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MutationTest extends TestCase
{
    use RefreshDatabase;

    public function testCreateUserMutation()
    {
        $response = $this->postJson('/graphql', [
            'query' => '
                mutation {
                    createUser(name: "John Doe", email: "john@example.com", password: "password") {
                        id
                        name
                        email
                    }
                }
            ',
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'data' => [
                    'createUser' => [
                        'name' => 'John Doe',
                        'email' => 'john@example.com',
                    ],
                ],
            ]);
    }
}
