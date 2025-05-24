<?php

namespace Database\Seeders;

use App\Models\Author;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Author::create([
            'name' => 'George Orwell',
            'photo' => 'george_orwell.jpg',
            'bio' => 'English novelist and essayist, journalist and critic',
        ]);

        Author::create([
            'name' => 'J.K. Rowling',
            'photo' => 'jk_rowling.jpg',
            'bio' => 'British author, best known for the Harry Potter series',
        ]);

        Author::create([
            'name' => 'F. Scott Fitzgerald',
            'photo' => 'f_scott_fitzgerald.jpg',
            'bio' => 'American novelist and short story writer',
        ]);

        Author::create([
            'name' => 'Haruki Murakami',
            'photo' => 'haruki_murakami.jpg',
            'bio' => 'Japanese writer of contemporary fiction',
        ]);

        Author::create([
            'name' => 'Mark Twain',
            'photo' => 'mark_twain.jpg',
            'bio' => 'American writer, humorist, entrepreneur, publisher, and lecturer',
        ]);
    }
}
