<?php 

    class Fruit{
        // Property
        public $name;
        public $color;

        // Method
        function getName(){
            return $this->name;
        }
        function getColor(){
            return $this->color;
        }
    }

    $apel = new Fruit();
    $apel->name = 'Apple';
    $apel->color = 'Red';

    $banana = new Fruit();
    $banana->name = 'Banana';
    $banana->color = 'Yellow';

    // Tampilkan objek
    echo $apel->getName();
    echo $apel->getColor();
    echo '<br><br>';
    echo $banana->getName();
    echo $banana->getColor();

?>