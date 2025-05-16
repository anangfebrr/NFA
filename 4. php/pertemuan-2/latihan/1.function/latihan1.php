<?php 

    $str = 'Belajar bahasa pemrOGRaman PHP';

    // strtoupper: mengubah teks menjadi huruf besar (uppercase)
    $str = strtoupper($str);
    echo '<br>' . $str;

    // strtolower: mengubah menjadi huruf kecil (lowercase)
    $str = strtolower($str);
    echo '<br>' . $str;

    // ucfirst: mengubah huruf pertama menjadi huruf besar
    $str = ucfirst($str);
    echo '<br>' . $str;

    // ucwords: mengubah semua kata pertama menjadi huruf besar
    $str = ucwords($str);
    echo '<br>' . $str;

    echo '<br><br><br><br><br>';

    $fruits = ['Pepaya', 'Apel', 'Mangga'];
    // mengurutkan dari A - Z
    sort($fruits);
        foreach ($fruits as $fruit){
            echo "$fruit<br>";
        }

    echo '<br>';
    // mengurutkan dari Z - A
    arsort($fruits);
        foreach ($fruits as $fruit){
            echo "$fruit<br>";
        }


?>