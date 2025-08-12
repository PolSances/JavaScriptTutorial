// set 

// Declaration

let mySet = new Set() //Empty Set

console.log(mySet)// Set(0) {}

// Incialitzation

mySet = new Set(["Pol", 33])
console.log(mySet) // Set amb elements que tenim

// Common Methods

//add and delete

mySet.add("33 Race Wins")
console.log(mySet) // Set(3) { 'Pol', 33, '33 Race Wins' }

mySet.delete("Pol")
console.log(mySet) // Set(2) { 33, '33 Race Wins' }

//has operation

console.log(mySet.has(33))

// size
console.log(mySet.size)

// Convert a set to an array
let myArray = Array.from(mySet)
console.log(myArray)

//Convert an array to a set
let mySetFromArray = new Set(myArray)
console.log(mySetFromArray)


// All the elements in a set cannot repeat

