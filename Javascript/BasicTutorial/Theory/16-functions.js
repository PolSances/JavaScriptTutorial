// Functions

// Just like java
function myFunc(){

}

// Anonymous function

const myAnonymousfunc = function(name){
    console.log(`Hola, ${name}`)
}

myAnonymousfunc("Pol")

// Arrow functions

const myfunc3 = (name) => console.log(name)

myfunc3("Pol")

// Return Values

function mult(a,b){
    return a * b
}

console.log(mult(5, 10))


// Superior Order Functions

function applyFunc(func, param){
    func(param)
}

applyFunc(myfunc3, "Superior Order Function")


// forEach

myArray = [1, 2, 3, 4]

myArray.forEach((value) => console.log(value)) // Also Worjs for Maps and sets




