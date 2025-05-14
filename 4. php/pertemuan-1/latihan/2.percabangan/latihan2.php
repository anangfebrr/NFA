<?php 

    $nama = 'Aqua';
    $nilai = 75;

    // Jika nilai >= 60 = lulus
    // Jika nilai < 60 = tidak lulus
    $keterangan = ($nilai >= 60) ? 'Lulus' : 'Tidak Lulus';
    echo "Nama siswa: $nama";
    echo "<br> Nilai: $nilai";

?>