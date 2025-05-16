<?php 

    class Lingkaran{
        private $jarijari;
        const PHI = 3.14;
        
        // Constructior
        function __construct($r)
        {
            $this->jarijari = $r;
        }

        function getLuas(){
            return self::PHI *$this->jarijari * $this->jarijari;
        }

        function getKeliling(){
            return 2* self::PHI * $this->jarijari;
        }
    }

    echo 'Nilai PHI = ' . Lingkaran::PHI;
    $lingkaran1 = new Lingkaran(10);
    $lingkaran2 = new Lingkaran(4);

    echo "<br> Luas Lingkaran 1 adalah " . $lingkaran1->getLuas();
    echo "<br> Luas Lingkaran 2 adalah " . $lingkaran2->getLuas();
    
    echo '<br><br>';

    echo "<br> Keliling Lingkaran 1 adalah " . $lingkaran1->getKeliling();
    echo "<br> Keliling Lingkaran 2 adalah " . $lingkaran2->getKeliling();
?>