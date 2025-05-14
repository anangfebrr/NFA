const mahasiswa = [
    {nama: "Anto", nilai: 10},
    {nama: "Ani", nilai:20},
    {nama: "Yuno", nilai: 30},
    {nama: "Aqua", nilai: 80},
    {nama: "Zip", nilai: 100},
]

const hitungRataRata = data => data.reduce((acc, mhs) => acc + mhs.nilai, 0) / data.length;
const mahasiswaLulus = data => data.filter(mhs => mhs.nilai >= 60);
const namaMahasiswaLulus = data => mahasiswaLulus(data).map(mhs => mhs.nama);

console.log(`Rata - rata nilai: ${hitungRataRata(mahasiswa)}`);
console.log(`Mahasiswa yang lulus : ${namaMahasiswaLulus(mahasiswa)}`);