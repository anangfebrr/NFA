function Person(name, age, city){
    // Deklarasi constructor ditandai dengan this
    this.name = name;
    this.age = age;
    this.city = city
}

// Dipanggil dalam object menggunakan keyword new
let person1 = new Person("Aqua", 21, "Depok");
let person2 = new Person("Ruby", 21, "Depok");
console.log(person1)
console.log(person2)
