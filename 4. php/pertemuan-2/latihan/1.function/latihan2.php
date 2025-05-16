<?php 

    // User-defined function | void (ridak mengembalikan nilai)

    // Tanpa parameter
    function salam(){
        echo '<br>Selamat pagi teman-teman';
    }
    salam();

    // Dengan parameter
    function sapa($kawan){
        echo '<br>Selamat pagi ' . $kawan;
    }
    $nama = 'Aqua';
    sapa($nama);

    // Dengan nilai default
    function kabar($kawan='Aqua'){
        echo "<br>Hai Apa Kabar $kawan?";
    }
    kabar();


?>