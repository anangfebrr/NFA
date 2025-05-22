<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selamat Datang</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>Selamat datang ditoko booksales</p>

    @foreach ($books as $item)
        <ul>
            <li>{{ $item['title'] }}</li>
            <li>{{ $item['description'] }}</li>
            <li>{{ $item['price'] }}</li>
            <li>{{ $item['stock'] }}</li>
        </ul>
    @endforeach
    
</body>
</html>