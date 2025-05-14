<?php 

    // Variable
    $nama = 'Aqua';
    $totalBelanja = 150000;
    $keterangan = '';

    // If-else
    if ($totalBelanja > 100000) {
        $keterangan = "Selamat $nama anda mendapatkan hadiah";
    } else {
        $keterangan = "Terimakasih";
    }

    echo "Nama pelanggan $nama";
    echo "<br> Total belanja: RP. $totalBelanja";
    echo "<br> $keterangan";

?>