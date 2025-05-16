<?php 

    class Fruit{
        public $name;
        protected $color;
        private $weight;
    }

    $mango = new Fruit();
    // echo $mango->name = 'Mangga';    Tidak bisa di akses diluar class
    // echo $mango->color = 'Orange';   Tidak bisa di akses diluar class
?>