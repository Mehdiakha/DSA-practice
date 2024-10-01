//using built-in maps
let collection = new Map();

//inserting key-value pairs
collection.set("Mehdi", 555);
collection.set("John", 123);

//retrieve values
console.log(collection.get("Mehdi"));

//check if a key exists
console.log(collection.has("John")); //true

//delete key-value pair
collection.delete("Mehdi");
console.log(collection.has("Mehdi")); //false

//implementing maps in a class (more in control)
class HashTable {

    constructor(size) {
        this.size = size;
        this.array = new Array(size);
    }

    


}
