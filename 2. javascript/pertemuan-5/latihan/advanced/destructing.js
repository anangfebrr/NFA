const angka = [10, 20, 30];
const [a, b, c] = angka;
console.log(a)


const user = {
    nama: "Budi",
    umur: 25,
    kota: "Depok"
};
const {nama, umur, kota} = user;
console.log(nama)

// Looping
const siswa = [
    {nama: "Alu", nilai: 40},
    {nama: "badu", nilai: 90},
];
for(const {nama, nilai} of siswa){
    console.log(`${nama} Mendapatkan nilai ${nilai}`)
}