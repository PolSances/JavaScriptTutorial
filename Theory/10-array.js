//array

// DEcalration

let myArray = []
let myArray2 = new Array(1)

conosole.log(myArray) //[]
conosole.log(myArray2) // [<1 empty slot>]
 
// Soin array com les de python no com les arrays primitives de c++

//Functions of the array

myArray.push("Your Element") // Like a push_back in c++
myArray.pop() //Deletes the last element

// shift and unshift

myArray.shift() //DElete the las element and move the elements to the left. (Like an dequeue in a queue)
myArray.unshift("Element that will be in first postition", 
    "Element that will be in second postition")

myArray.length // Is a value not a function in the array class in Javascript


myArray = [] //DElete all elements
myArray.length = 0 //alternative way to delete the ewhole content of the array

//slice 

myArray.slice(1,2) //The same as python slicing

myArray.splice(1,3) //DEletes the lement between the index + offset

