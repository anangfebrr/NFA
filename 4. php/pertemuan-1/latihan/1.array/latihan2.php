<?php 

    //satu baris
    $fruit = ['name' => 'Apel', 'Color' => 'Red', 'Price' => 5000];

    //multi baris
    $car = [
        'brand' => 'Ford',
        'model' => 'Mustang',
        'year' => 1964
    ];

    foreach ($fruit as $a => $b) {
        echo "$a : $b <br>";
    }

    echo '<br><br>';

    foreach ($car as $x => $y){
        echo "$x : $y <br>";
    }

?>