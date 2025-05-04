import React, { useRef } from 'react';
import produkData from '../Utils/produkData'
import styles from '../styles/produk.module.css';

function Produk() {
    let produkList = [...produkData]; //Salin data produk awal
    const produkContainerRef = useRef(null); //Ref untuk container produk
    const handleClick = () => {
        const newProduk = {
            id: produkList.length +1,
            nama: "Produk Baru",
            tahun: 2023,
            harga: "Rp. 3.000.000",
            gambar: "https://placehold.co/150"
            
        };
        produkList.push(newProduk); //Menambahkan produk baru ke dalam list produk

        // Menambahkan produk baru ke dalam DOM
        if (produkContainerRef.current){
            const newProdukElement = document.createElement("div");
            newProdukElement.className = StyleSheet.card;
            newProdukElement.innerHTML = `
                <img src= "${newProduk.gambar}" alt= "${newProduk.nama}"/>
                <h3>${newProduk.nama}</h3>
                <p>Tahun: ${newProduk.tahun}</p>
                <p>Harga: ${newProduk.harga}</p>
            `;
            produkContainerRef.current.appendChild(newProdukElement);
        }
        console.log("Produk terbaru:", produkList);
        alert("Produk baru berhasil ditambahkan! Silahkan cek di browser");

    }
  return (
    <div className={styles.produkContainer}>
        <h1 className={styles.title}></h1>
        <div className={styles.cardContainer} ref ={produkContainerRef}>
            {produkList.map((item) => (
                <div key={item.id} className={styles.card}>
                    <img src={item.gambar} alt={item.nama} />
                    <h3>{item.nama}</h3>
                    <p>Tahun: {item.tahun}</p>
                    <p>Harga: {item.harga}</p>
                </div>
            ))}
        </div>
            <button onClick={handleClick} className={styles.addButton}>Tambah Produk Baru</button>
    </div>
  )
}

export default Produk