// Console

//log

console.log("Hello, Javascript")

// error

console.error("This is an error message")
console.error("Error connecting to the database" , new Error("Failed Connection"))

// warn

console.warn("This a warning message")

// info

console.info("Show infromation")

// table

let data1 = [
    ["Pol", 37],
    
]

console.table(data1)

let data = [
    {name: "Pol", age: 19},
    {name: "Random", age: 33}
]

console.table(data)


// group

console.group("People")
console.log("Name: Pol")
console.log("Name: Cono")
console.groupEnd()

//time

console.time("Execution time")

for(let i = 0; i < 10000; i++){

}

console.timeEnd("Execution time")

// assert

let age = 17
console.assert(age >= 18, "The user cannot be a minor")

//count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

//trace

function funcA(){
    funcB()
}

function funcB(){
    console.trace("Execution")
}

funcA()

//clear

//  console.clear()