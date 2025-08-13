// Strings

//String Conceatenation
let myName = "Pol"
let greeting = "Hola, " + myName
console.log(greeting) // Hola, Pol
console.log(typeof greeting) //string

// Length of a String
console.log(greeting.length)

// Accesing Carachters
console.log(greeting[0]) //H
console.log(greeting[33]) //Undefined

// Common Methods Applied to Strings
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Pol")) //6
console.log(greeting.indexOf("Fernando Alonso")) //-1
console.log(greeting.includes("Pol")) //true
console.log(greeting,includes("Fernando Alonso")) // false
console.log(greeting.slice(0,3)) // Igual que slicing de python "Hola"
console.log(greeting.replace("Pol", "Fernadno Alonso"))

// Template Literals

let message = `Hola, este 
es
 mi 
curso de javascript`

console.log(message)

console.log(`Hola, ${myName}!`)`//Similar a les fstrings de python





