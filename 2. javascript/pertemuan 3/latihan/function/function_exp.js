// FUNCTION EXPRESSION
    //harus di inisiasi dahulu sebelum ditampilkan hasilnya

const kali = function(a, b){
    return a * b;
}
// console.log(kali(5,4));

const hitungLuas = function luasPersegi(sisi){
    return sisi * sisi;
}
console.log(hitungLuas(6));

const mahasiswa = [
    {nama: "Anto", nilai: 10},
    {nama: "Ani", nilai:20},
    {nama: "Yuno", nilai: 30},
    {nama: "Aqua", nilai: 80},
    {nama: "Zip", nilai: 100},
]
const hitungAverage = function (data){
    let total = 0;
    for(let i = 0; i < data.length; i++){
        total += data[i].nilai;
    }
    return total / data.length;
}

const mahasiswaLulus = function(data){
    return data.filter(mhs => mhs.nilai >= 60)
}

const mahasiswaTidakLulus = function(data){
    return data.filter(mhs => mhs.nilai < 60);
}
console.log(`Rata rata nilai: ${hitungAverage(mahasiswa)}`);
console.log("Mahasiswa yang lulus: ", mahasiswaLulus(mahasiswa));
console.log("Mahasiswa tidak lulus: ", mahasiswaTidakLulus(mahasiswa));