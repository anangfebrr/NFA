<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Genre;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            GenreSeeder::class,
            BookSeeder::class,
            AuthorSeeder::class,
            UserSeeder::class
        ]);
    }
}
