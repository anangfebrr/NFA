//Object merupakan struktur data yang digunakan untuk menyimpan koleksi data dalam bentuk key-value pair.
//Setiap key disebut property & value bisa berupa tipe data seperti string, boolena, array, function, dll

let person = {
    name: "Aqua",
    age: 25,
    city: "Isekai"
};

for (let key in person){
    console.log(`${key} : ${person[key]}`)
}
console.log(person);