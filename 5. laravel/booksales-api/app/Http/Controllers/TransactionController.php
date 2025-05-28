<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
{
    // Show all data
    public function index(){
        $transactions = Transaction::with('user', 'book')->get(); //bisa menggunakan find($id)

        if ($transactions->isEmpty()) {
            return response()->json([
                "success" => true,
                "message" => "Resource data not found!"
            ], 200);
        }

        return response()->json([
            "success" => true,
            "message" => "Get all resources",
            "data" => $transactions
        ], 200);
    }

    // Transaction
    public function store(Request $request){
        // 1. Validator & cek validator
        $validator = Validator::make($request->all(), [
            'book_id' => 'Required|exists:books,id',
            'quantity' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'data' => $validator->errors()
            ], 422);
        }

        // 2. Generate order number -> unique | ORD-000
        $uniqueCode = "ORD-" .strtoupper(uniqid());

        // 3. Mengambil user yang sedang login & cek login
        $user = auth('api')->user();

        if (!$user){
            return response()->json([
                'success' => false,
                'message' => 'Unathorized!'
            ], 401);
        }

        // 4. Mencari data buku dari request
        $book = Book::find($request->book_id);

        // 5. Cek stok buku
        if ($book->stock < $request->quantity) {
            return response()->json([
                'success' => false,
                'message' => 'Insufficient stock of goods'
            ], 400);
        }

        // 6. Hitung total harga
        $totalAmount = $book->price * $request->quantity;

        // 7. Kurangi stok buku (update)
        $book->stock -= $request->quantity;
        $book->save();

        // 8. Simpan data transaksi
        $transactions = Transaction::create([
            'order_number' => $uniqueCode,
            'customer_id' => $user->id,
            'book_id' => $request->book_id,
            'total_amount' => $totalAmount
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Transaction created successfully!',
            'data' => $transactions
        ], 200);
    }

    // Show data by id
    public function show(string $id){
        $transactions = Transaction::find($id);
        if (!$transactions) {
            return response()->json([
                'success' => false,
                'message' => 'Transaction not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Get detail resource',
            'data' => $transactions
        ]);
    }

    // Update data
    public function update(string $id, Request $request){
        // 1. Mencari data
        $transactions = Transaction::find($id);

        if (!$transactions) {
            return response()->json([
                'success' => false,
                'message' => 'Resource not found'
            ], 404); 
        }

        // 2. Validator
        $validator = Validator::make($request->all(), [
            'book_id' => 'Required|exists:books,id',
            'quantity' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        // 3. Siapkan data yang ingin di update
        $book = Book::find($request->book_id);
        if (!$book) {
            return response()->json([
                'success' => false,
                'message' => 'Book not found'
            ], 404);
        }

        // Optionally, handle stock adjustment here if needed

        $totalAmount = $book->price * $request->quantity;

        $data = [
            'book_id' => $request->book_id,
            'total_amount' => $totalAmount
        ];

        // 4. Update data baru ke database
        $transactions->update($data);

        return response()->json([
            'success' => true,
            'message' => 'resource updated successfully!',
            'data' => $transactions
        ], 200);
    }
    
    // Delete data
    public function destroy(string $id){
        $transactions = Transaction::find($id);

        if (!$transactions) {
            return response()->json([
                'success' => false,
                'message' => 'Resource not found'
            ], 404);
        }

        $transactions->delete();
        return response()->json([
            'success' => true,
            'message' => 'Delete resource successfully'
        ]);
    }
}
