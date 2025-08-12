// Loops

// for

for(let i = 0; i < 5; i++){
    console.log(`hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]

for(let i = 0; i < numbers.length; i++){
    console.log(`hola ${numbers[i]}`)
}

//while 

let i = 0
while(i < 5){
    console.log(`hola ${i}`)
    i++
}

// do while (once at least)

i = 6

do{
    console.log(`hola ${i}`)
    i++
} while (i < 5)


// for of

let myArray = [1, 2, 3, 4, 5]

for (let valor of myArray){ // Change that for mySet or myMap to do it with those structures
    console.log(valor)
}

