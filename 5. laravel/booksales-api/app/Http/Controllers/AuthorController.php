<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AuthorController extends Controller
{
    // Show all data
    public function index() {
        $authors = Author::all();

        if ($authors->isEmpty()) {
            return response()->json([
                "success" => true,
                "message" => "Resource data not found!"
            ], 200);
        }

        return response()->json([
            "success" => true,
            "message" => "Get all resources",
            "data" => $authors
        ], 200);
    }

    // Upload data
    public function store(Request $request){
        // 1. Validator
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'photo' => 'required|image|mimes:jpeg,jpg,png|max:2048',
            'bio' => 'required|string'
        ]);

        // 2. Check validator error
        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        // 3. Upload image
        $image = $request->file('photo');
        $image->store('authors', 'public');

        // 4. Insert data
        $author = Author::create([
            'name' => $request->name,
            'photo' => $image->hashName(),
            'bio' => $request->bio,            
        ]);

        // 5. Response
        return response()->json([
            'success' => true,
            'message' => 'resource added successfully!',
            'data' => $author
        ], 201);
    }

    // Show data by id
    public function show(string $id){
        $author = Author::find($id);
        if (!$author) {
            return response()->json([
                'success' => false,
                'message' => 'Resource not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Get detail resource',
            'data' => $author
        ]);
    }

    // Update data
    public function update(string $id, Request $request){
        // 1. Mencari data
        $author = Author::find($id);

        if (!$author) {
            return response()->json([
                'success' => false,
                'message' => 'Resource not found'
            ], 404); 
        }

        // 2. Validator
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'photo' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
            'bio' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        // 3. Siapkan data yang ingin di update
        $data = [
            'name' => $request->name,
            'bio' => $request->bio,
        ];

        // 4. Handle image (upload & delete image)
        if ($request->hasFile('photo')){
            $image = $request->file('photo');
            $image->store('authors', 'public');

            if ($author->photo){
                Storage::disk('public')->delete('authors/' . $author->photo);
            }

            $data['photo'] = $image->hashName();
        }

        // 5. Update data baru ke database
        $author->update($data);

        return response()->json([
            'success' => true,
            'message' => 'resource updated successfully!',
            'data' => $author
        ], 200);
    }

    // Delete data
    public function destroy(string $id){
        $author = Author::find($id);

        if (!$author) {
            return response()->json([
                'success' => false,
                'message' => 'Resource not found'
            ], 404);
        }

        if ($author->photo){
            // Delete from storage
            Storage::disk('public')->delete('authors/' . $author->photo);
        }

        $author->delete();
        return response()->json([
            'success' => true,
            'message' => 'Delete resource successfully'
        ]);
    }
}