class Pelanggan{
    constructor(nama, nomorTelepon){
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }
    sewaKendaraan(kendaraan){
        this.kendaraanDisewa = kendaraan;
        console.log(`${this.nama} berhasil menyewa kendaraan ${kendaraan}`);
        daftarPelanggan.push(this);
    }
}

let daftarPelanggan = [];

function tampilkanDaftarPelanggan(){
    console.log('Daftar pelanggan yang sedang menyewa kendaraan: ');
    if (daftarPelanggan.length === 0){
        console.log('Tidak ada pelanggan yang sedang menyewa kendaraan.');
    } else{
        daftarPelanggan.forEach((pelanggan, index) => {
            console.log(`${index + 1}. ${pelanggan.nama} - Kendaraan: ${pelanggan.kendaraanDisewa}`);
        });
    }
}

let pelanggan1 = new Pelanggan('Aqua', '123-456-789');
let pelanggan2 = new Pelanggan('Rius', '321-654-987');

pelanggan1.sewaKendaraan('Mobil');
pelanggan2.sewaKendaraan('Motor');

tampilkanDaftarPelanggan();