// FUNCTION DECLARATION

function hitungRataRata(nilai){
    //function adalah deklarasi
    //hitungRataRata nama function
    //(nilai) adalah parameter
    let total = 0; //nilai awal
    for(let i = 0; i < nilai.length; i++){
        total += nilai[i];
    }
    return total / nilai.length; //return value
}

let nilaiMahasiswa = [80,90,75,85,100];

console.log(`Rata-rata Nilai: ${hitungRataRata(nilaiMahasiswa)}`);