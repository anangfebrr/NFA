let buah = ['Pepaya', 'Mangga', 'Pisang', 'Jambu']; //Deklarasi sebuah array
buah[2] = "Durian"
buah.push("Semangka"); //Menambahkan valle pada index terakhir
buah.pop() //Menghapus value pada index terakhir
buah.unshift("Nanas"); //Menambahkan value pada awal index
buah.shift(); //Menghapus value pada awal index
console.log(buah);

buah.length = 2
let nomor = [1];
let angka = new Array(10,20,30);  //New array
let arrKosong = new Array(5); //Merupakan panjang data, bukan isi/valuenya
let arr = new Array(5).fill(0); //Menampilkan value berupa 5 angka 0
let nama = ("andi");

//Menambahkan metode ke semua array
Array.prototype.tampilkan = function(){
    console.log(this.join("-"));
}
let warna = ["Merah", "Biru", "Kuning"];
warna.tampilkan();



//Menampilkan value sebuah array berdasarkan index
    // console.log(buah[0]); 
    // console.log(buah[1]);
    // console.log(buah[2]);

//Memeriksa apakah ini sebuah variabel atau array
    // console.log(angka.constructor);
    // console.log(nama.constructor);

// console.log(buah.length);
// console.log(nomor);
// console.log(angka);
// console.log(arrKosong);
// console.log(arrKosong[0]);
// console.log(arr);

