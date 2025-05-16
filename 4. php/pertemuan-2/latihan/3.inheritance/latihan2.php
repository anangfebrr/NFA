<?php 

    class Hewan{
        protected $nama;

        public function __construct($nama)
        {
            $this->nama = $nama;
        }

        public function getNama(){
            return $this->nama;
        }
    }

    class Kucing extends Hewan{
        public function suara(){
            return 'Meow';
        }
    }

    $kucing = new Kucing('Tom');
    echo '<br>' . $kucing->getNama(); //Output: Tom
    echo '<br>' . $kucing->suara();  //Output: Meow

?>