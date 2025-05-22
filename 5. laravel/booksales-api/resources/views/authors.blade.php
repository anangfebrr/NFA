<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Author</title>
</head>
<body>
    <h1>Berikut adalah Author yang ada di aplikasi kami</h1>

    @foreach ($authors as $item)
        <ul>
            <li>{{ $item['id'] }}</li>
            <li>{{ $item['name'] }}</li>
            <li>{{ $item['photo'] }}</li>
            <li>{{ $item['bio'] }}</li>
        </ul>
    @endforeach
    
    
</body>
</html>