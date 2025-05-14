// Daftar produk dalam bentuk array & fungsi untuk menampilkan detail produk menggunakan destructing
const produklist = [
    {nama: "Laptop", harga: 7500000, stok: 10},
    {nama: "Smartphone", harga: 5000000, stok: 5},
    {nama: "Tablet", harga: 3000000, stok: 7},
]
function tampilkanDetailProduk({nama, harga, stok}){
    console.log(`Nama Produk ${nama}`);
    console.log(`Harga: RP${harga}`);
    console.log(`Stok ${stok}`);
    console.log("====================")
}
const [produk1, produk2] = produklist;
console.log("Detail Produk 1: ");
tampilkanDetailProduk(produk1);
console.log("Detail Produk 2: ");
tampilkanDetailProduk(produk2);