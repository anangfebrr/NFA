<?php 

    $nama = 'Aqua';
    $nilai = '75';

    // If-else multi kondisi
    if ($nilai >= 85 && $nilai <= 100) {
        $grade = "A";
    } else if ($nilai >= 75 && $nilai <85) {
        $grade = "B";
    } else if ($nilai >= 60 && $nilai <75) {
        $grade = "C";
    } else if ($nilai >= 30 && $nilai <60) {
        $grade = "D";
    } else if ($nilai >= 0 && $nilai <30) {
        $grade = "C";
    } else {
        $grade = "Tidak valid";
    }
    
    // Switch case
    switch($grade){
        case 'A':
            $predikat = 'Memuaskan';
            break;
        case 'B':
            $predikat = 'Baik';
            break;
        case 'C':
            $predikat = 'Cukup';
            break;
        case 'D':
            $predikat = 'Kurang';
            break;
        case 'E':
            $predikat = 'Buruk';
            break;
        default:
            $predikat = 'Tidak Valid';
            break;
    }

    echo "Nama siswa: $nama";
    echo "<br> Nilai: $nilai";
    echo "<br> Grade: $grade";
    echo "<br> Predikat: $predikat";
?>