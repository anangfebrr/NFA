let angka1 = [1,2,3];
let angka2 = [4,5,6];

let hasilGabung = angka1.concat(angka2); //Concat menggabungkan 2 atau lebih array
let teks = angka1.join("-"); //Mengubah array menjadi string
let potongan = angka1.slice(2,3); //Mengambil bagian tertentu dari array
angka1.splice(1,1,10,20); //Menambah atau menghapus elemen di tengah array

console.log(angka1.indexOf(1)); //mencari index berdasarkan elemen pertama
console.log(angka1.lastIndexOf(2)); //mencari index berdasarkan elemen terakhir
console.log(angka1.sort());
console.log(angka1.reverse());