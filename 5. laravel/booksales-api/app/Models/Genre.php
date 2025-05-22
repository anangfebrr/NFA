<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $genres = [
        [
            'id' => 1,
            'genre' => 'Fiction',
            'description' => 'Literary works that are imagined or invented.',            
        ],
        [
            'id' => 2,
            'genre' => 'Mystery',
            'description' => 'Fiction dealing with the solution of a crime or the unraveling of a puzzle.',            
        ],
        [
            'id' => 3,
            'genre' => 'Science Fiction',
            'description' => 'Fiction dealing with futuristic concepts like space exploration, time travel, etc.',            
        ],
        [
            'id' => 4,
            'genre' => 'Fantasy',
            'description' => 'Fiction that uses magic or other supernatural elements.',            
        ],
        [
            'id' => 5,
            'genre' => 'Biography',
            'description' => 'A detailed description of a person\'s life.',
        ],
    ];

    public function getGenres() {
        return $this->genres;
    }
}
