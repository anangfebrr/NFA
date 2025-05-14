import users from './data.mjs'

const index = () => {
    console.log("Daftar Pengguna:")
    users.forEach(({nama, umur, alamat, email}) => {
        console.log(`Nama: ${nama}, Umur: ${umur}, Alamat: ${alamat}, Email: ${email}`)
    })
}

const store = (newDataUser) => {
    users.push(newDataUser)
    console.log("Pengguna berhasil ditambahkan");
}

const destroy = (index) => {
    if (index >= 0 && index < users.length){
        users.splice(index, 1)
        console.log("Pengguna berhasil dihapus");
    } else{
        console.log("index tidak valid");
    }
};

export { index, store, destroy }