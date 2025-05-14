const produk = [
    {id: 1, nama: "Laptop", harga:  7000000, stok: 5},
    {id: 2, nama: "Mouse", harga:  200000, stok: 10},
    {id: 3, nama: "Keyboard", harga:  350000, stok: 7},
]

function tambahProduk(id, nama, harga, stok) {
    produk.push({id, nama, harga, stok});
    return produk;
}
function hapusProduk(id){
    const index = produk.findIndex(item => item.id === id);
    if (index !== -1) {
        produk.splice(index, 1);
    }
    return produk;
}
function tampilkanProduk() {
    console.log("Daftar Produk");
    produk.forEach(item => {
        console.log(`Nama Produk: ${item.nama}, Harga Produk: ${item.harga}, Stok Produk: ${item.stok}`);
    });
}

console.log(tambahProduk(4, "Speaker", 10000, 3));
console.log(hapusProduk(5));
console.log(tampilkanProduk());