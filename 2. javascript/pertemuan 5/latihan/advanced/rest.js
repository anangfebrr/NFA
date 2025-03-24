// Rest Parameters
function jumlahkan(...angka){
    return angka.reduce((total, num) => total + num, 0)
}
console.log(jumlahkan(2,3,4,5));

// Rest Parameters menggunakan Destructing
const arrayAngka = [1, 2, 3, 4, 5];
const [pertama, kedua, ...sisanya] = arrayAngka;
console.log(pertama, kedua, sisanya);

// Rest parameters digunakan ke sebuah objek
const data = {
    nama: "Anto",
    umur: 100,
    kota: "Ambarawa",
    pekerjaan: "ProGamer",
};
const {nama, ...infoLain} = data;
console.log(nama, infoLain);