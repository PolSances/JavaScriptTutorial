// Importing modules

import { add, PI, name, Circle } from "./28-export-modules.js"

import subtract from "./28-export-modules.js"

//functions

console.log(add(5,10))


// Properties

console.log(PI)
console.log(name)


// Default Improtation

console.log(subtract(5,10)) // Default is only for one epecific object

// You cannot export by default variables, only functions and classes


// Classes

let circle = new Circle(33)
console.log(circle.radius)
console.log(circle.area().toFixed(2))


// Import External Modules

const os = require("os") 

console.log(os.platform())