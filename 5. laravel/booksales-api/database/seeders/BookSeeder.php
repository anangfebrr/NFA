<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Book::create([
            'title' => '1984',
            'description' => 'A dystopian social science fiction novel and cautionary tale.',
            'price' => 40000.00,
            'stock' => 49,
            'cover_photo' => '1984_cover.jpg',
        ]);

        Book::create([
            'title' => 'Harry Potter and the Sorcerer\'s Stone',
            'description' => 'The first book in the Harry Potter series.',
            'price' => 25000.00,
            'stock' => 100,
            'cover_photo' => 'harry_potter_cover.jpg',
        ]);

        Book::create([
            'title' => 'The Great Gatsby',
            'description' => 'A novel about the American Dream and its disillusionment.',
            'price' => 60000.00,
            'stock' => 30,
            'cover_photo' => 'gatsby_cover.jpg',
        ]);

        Book::create([
            'title' => 'Norwegian Wood',
            'description' => 'A poignant and powerful story of love and loss.',
            'price' => 30000.00,
            'stock' => 20,
            'cover_photo' => 'norwegian_wood_cover.jpg',
        ]);

        Book::create([
            'title' => 'The Adventures of Huckleberry Finn',
            'description' => 'A novel that explores themes of friendship, freedom, and society.',
            'price' => 50000.00,
            'stock' => 40,
            'cover_photo' => 'huckleberry_finn_cover.jpg',
        ]);
    }
}
