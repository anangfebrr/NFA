<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    private $authors = [
        [
            'id' => 1,
            'name' => 'George Orwell',
            'photo' => 'george_orwell.jpg',
            'bio' => 'English novelist and essayist, journalist and critic',
        ],
        [
            'id' => 2,
            'name' => 'J.K. Rowling',
            'photo' => 'jk_rowling.jpg',
            'bio' => 'British author, best known for the Harry Potter series',
        ],
        [
            'id' => 3,
            'name' => 'F. Scott Fitzgerald',
            'photo' => 'f_scott_fitzgerald.jpg',
            'bio' => 'American novelist and short story writer',
        ],
        [
            'id' => 4,
            'name' => 'Haruki Murakami',
            'photo' => 'haruki_murakami.jpg',
            'bio' => 'Japanese writer of contemporary fiction',
        ],
        [
            'id' => 5,
            'name' => 'Mark Twain',
            'photo' => 'mark_twain.jpg',
            'bio' => 'American writer, humorist, entrepreneur, publisher, and lecturer',
        ],
    ];


    public function getAuthors() {
        return $this->authors;
    }
}
