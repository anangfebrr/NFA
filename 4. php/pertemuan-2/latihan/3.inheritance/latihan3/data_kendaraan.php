<?php 

    require_once 'class_kendaraan.php';

    $motor = new Motor("Motor", "Bensin", 2);

    echo "Info Motor <br>";
    $motor->getInfo();

?>