// Data Produk
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000},
    { id: 2, nama: "Smartphone", harga: 5000000},
    { id: 3, nama: "Keyboard", harga: 1000000},
    { id: 4, nama: "Smartwatch", harga: 500000},
    { id: 5, nama: "TV", harga: 9000000},
];

// Menambahkan Produk
function tambahProduk(id, nama, harga){
    // Spread Operator
    produkList = [...produkList, {id, nama, harga}];
    console.log(`Produk ${nama} berhasil ditambahkan`);
}

// Menghapus Produk
function tampilkanProduk(){
    //  Rest Parameter
    console.log("Daftar Produk:");
    produkList.forEach(({nama, harga }) => {
        console.log(`Nama: ${nama}, Harga: Rp${harga}`);
    });
}

// Function
const eventHandler = {
    // Event Listener
    tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
    hapus: (id) => hapusProduk(id),
    tampil: () => tampilkanProduk()
}

// Output
eventHandler.tampil(); //Menampilkan Produk
eventHandler.tambah(6, "Mouse", 50000); // Menambahkan Produk
eventHandler.hapus(2); // Menghapus  Produk