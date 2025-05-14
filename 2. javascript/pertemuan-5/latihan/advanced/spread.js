const angka = [1, 2, 3];
console.log(angka[0], angka[1], angka[2]); //Without Spread
console.log(...angka); //With Spread

//Menggabungkan 2 operator
const angka2 = [4, 5, 6];
const gabungkan = [...angka, ...angka2];
console.log(gabungkan)

//Menambahkan array baru tanpa merubah yang asli
const angkaBaru = [...angka, ...angka2, 7, 8, 9]; //Salin array lalu tambahkan
console.log(angkaBaru);

//Menggabungkan objek
const user = {nama: "Budi", umur: 25};
const userBaru = {...user};
console.log(userBaru)