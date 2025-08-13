// Objects

// Colllection key value realted data, they are not considered primitive

// Syntax

let person = {
    name: "Pol",
    age: 19,
    alias: "cono"
}

// Accessing properties

// Dot notation
console.log(person.name)

// Alt notation with "[]"
console.log(person["name"])

// MOdifiying the data of the object

person.name = "Pol Sances"
console.log(person.name)

person.age = "19"
console.log(person.age)

// Deleting properties

delete person.age

console.log(person)

// Creating new property

person.email = "email@example.org"
person["age"] = 19

console.log(person)

// Creatin function

let person2 = {
    name: "Pol",
    age: 19,
    alias: "cono",
    walk: function() {
        console.log("Person walks")
    }
}

person2.walk()

// Creating object inside the major object

let person3 = {
    name: "Pol",
    age: 19,
    alias: "cono",
    walk: function() {
        console.log("Person walks")
    },
    job: {
        name: "Programmer",
        exp: 15,
        work: function (){
            console.log("The person works")
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()


// Comparing objects

let person5 = {
    name: "Pol",
    age: 19,
    alias: "cono"
}

let person6 = {
    name: "Pol",
    age: 19,
    alias: "cono"
}

console.log(person5 == person6) //false
console.log(person5 === person6) //false

// This is not equal because this objects are not primitive so they have not the same reference

// Iteration

for(let key in person5){
    console.log(key + ": " + person5[key])
}

// Functions as objects

function Person(name, age){ //Basically a constructor
    this.name = name
    this.age = age
}

let person7 = new Person("Pol", 19)