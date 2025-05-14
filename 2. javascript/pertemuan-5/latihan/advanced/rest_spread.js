let daftarProduk = ["Laptop", "Smartphone"];

function tambahProduk(...produkBaru){
    daftarProduk = [...daftarProduk, ...produkBaru]
    console.log("Produk berhasil ditambahkan ", produkBaru)
}

function tampilkanProduk(){
    console.log("Daftar produk saat ini ", daftarProduk);
}

function salinProduk(){
    return[...daftarProduk];
}
tambahProduk("Tablet", "Headphone");
tampilkanProduk()

const produkCadangan = salinProduk();
console.log("Produk cadangan ", produkCadangan);

tambahProduk("Smartwatch", "Mouse");
tampilkanProduk();

console.log("Produk cadangan setelah perubahan ", produkCadangan);