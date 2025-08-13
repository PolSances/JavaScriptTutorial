let myArray = [1, 2, 3, 4]

let person = {
    name: "Pol",
    age: 19,
    alias: "cono"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)


// Destructuration

// Syntax arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Syntax Arrays with default values

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

//Ignoring elements of an array
let [myValue10 = 0, , , myValue13 = 0] = myArray // skips the values that I don't want
console.log(myValue10)
console.log(myValue13)


//Syntax Objects

let {name , age, alias} = person // Same but with "{}"
console.log(name)
console.log(age)
console.log(alias)

// Syntax objects with default values

//let {name2 , age2, alias2, email} = person // This is not possible because the name of variable has to be the same name as the key

let {name2 , age2, alias2, email2 = "mail@email.com"} = person
console.log(name2) // Doesn't exist
console.log(age2) // Doesn't exist
console.log(alias2) // Doesn't exist
console.log(email2)

//Syntx Objects with new variable names

let {name: name3 , age: age3, alias: alias3, email: email3 = "mail@email.com"} = person
console.log(name3)
console.log(age3)
console.log(alias3)
console.log(email3)

// Anidated Objects

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

let {name: name4, job: {name: jobname} } = person3
console.log(jobname)


// Spreading (...)

let myArray2 = [...myArray]

let myArray3 = [...myArray, 5, 6] // Pas per copia

console.log(myArray2)
console.log(myArray3)

// Combining Arrays

let myArray4 = [...myArray ,...myArray2, ...myArray3]
console.log(myArray4)

// Object Syntax

let person4 =  {...person, email: "email@email.com"}
console.log(person4)

// Object Copy (Not by Reference)

let person5 = {...person}
console.log(person5)