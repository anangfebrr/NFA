//Melakukan iterasi dalam array menggunakan menggunakan for
let buah = ["Apel", "Mangga", "Jeruk", "Pisang"];

for (let i = 1; i < buah.length; i++) {
    console.log(buah[i]);
}

//Melakukan loop salama kondisi bernilai true meggunakan while
let angka = [10, 21, 30, 40, 50];
let i = 0;
while(i < angka.length){
    console.log(angka[i]);
    i++
}

//Melakukan looping tanpa menggunakan indeks
angka.forEach(function(item, index){
    console.log(`index ${index} : ${item}`);
})

//Mengubah setiap elemen dalam array dan menghasilkan array baru
let angkaBaru = angka.map(num => num * 2);
console.log(angkaBaru);

//Menyaring elemen yang memenuhi suatu kondisi lalu menghasilkan array
let angkaGanjil = angka.filter(num => num%2 !== 0);
console.log(angkaGanjil)

//Mengolah seluruh elemen dalam array menjadi satu nilai
let total = angka.reduce((acc, num) => acc + num, 0);
console.log(total);

//For of cara looping yang lebih sederhana
for (let item of angka){
    console.log(item)
}