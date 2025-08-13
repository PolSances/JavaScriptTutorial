// Map

// Declaration

let myMap = new Map()

console.log(myMap)

// Incialitzation

myMap = new Map([
    ["name", "Pol"],
    ["email","email@example.org"],
    ["age", 19]
])

console.log(myMap)

//Methods and properties

//set
myMap.set("alias", "cono") // Insert an element
myMap.set("name", "Pol Sances") // if key exists it changes if doesn't inserts it

console.log(myMap)

//get 

console.log(myMap.get("name")) // Pol Sances
console.log(myMap.get("surname")) //Undefined

//has

console.log(myMap.has("surname")) //false
console.log(myMap.has("name")) //true

//delete

myMap.delete("email") //deletes the kwyword and element pair from the map

console.log(myMap)

//keys

console.log(myMap.keys()) //Iterates over all keys
console.log(myMap.values()) //Iterates over all values 
console.log(myMap.entries()) // Iterates overa all the elements together


//size

console.log(myMap.size)


//clear 

myMap.clear()

console.log(myMap)