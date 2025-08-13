//Operators

// Arithmetic operators

let a = 6
let b = 10

console.log(5 + 10) // Sum
console.log(5 - 10) // Subtraction
console.log(5 * 10) // Multiplication
console.log(5 / 10) // Division


console.log(a % b) // Modul
console.log(a ** b) //Exponentiation


// Comparator operators
console.log(a > b)
console.log(a >= b)
console.log(a < b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) //true
console.log(a == "6") //true
console.log(a === a) // Igualtat per identitat //true
console.log(a === 6) //true
console.log(a === "6") //false
console.log(a !== "6")
console.log(a != 6)
console.log(0 == false)
console.log(1 == true)
console.log(0 == "") //true
console.log(0 == " ") //true 
console.log(undefined == null) //true
console.log(undefined === null) //false

//Truthy Values
// Todos los numeros positivos negativos menos el cero.
// Todas las cadenas de texto menos las vacías
// Boolean true


// Falsy Values
// Boolean false
// Zero
// Cadenas Vacías 
// Null
// Undefined


// Logical Operators
console.log(5 > 10 && 15 > 20) //And Operator
console.log(5 > 10 || 15 > 20) //Or Operator

// Ternary Operator

const isRaining = true

isRaining ? console.log("It's isRaining") : console.log("It's not Raining")


