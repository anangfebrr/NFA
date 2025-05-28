<?php

namespace Database\Seeders;

use App\Models\Transaction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Transaction::create([
            'order_number' => 'ORD-0001',
            'customer_id' => 2,
            'book_id' => 1,
            'total_amount' => 25000.00
        ]);

        Transaction::create([
            'order_number' => 'ORD-0002',
            'customer_id' => 2,
            'book_id' => 2,
            'total_amount' => 50000.00
        ]);
    }
}
