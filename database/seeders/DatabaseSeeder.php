<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        DB::table('roles')->insert([
            'id' => 1,
            'title' => 'admin'
        ]);
        DB::table('roles')->insert([
            'id' => 2,
            'title' => 'client'
        ]);

//        Admin User
        DB::table('users')->insert([
            'name' => 'John Doe',
            'email' => 'johndoe@gmail.com',
            'password' => Hash::make('12341234'),
            'role_id' => 1
        ]);

//        Client User
        DB::table('users')->insert([
            'name' => 'Test User',
            'email' => 'test@gmail.com',
            'password' => Hash::make('12341234'),
            'role_id' => 2
        ]);
    }
}
