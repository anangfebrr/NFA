<?php 

    // Array numerik
    $buah = ["Apel", "Pisang", "Jeruk"];
    foreach ($buah as $item){
        echo "$item<br>";
    }

    echo "<br><br>";

    // Array asosiatif
    $hargaBuah = array(
        "Apel" => 10000, 
        "Pisang" => 5000, 
        "Jeruk" => 7000
    );

    foreach ($hargaBuah as $namaBuah => $hargaBuah){
        echo "Harga $namaBuah adalah $hargaBuah<br>";
    }


?>