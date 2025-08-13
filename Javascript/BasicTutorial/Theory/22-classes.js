// Classes

class Person{

    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

}


// Syntax

let person = new Person("Pol", 19, "cono")
console.log(person)


// Default values

class DefaultPerson{

    constructor(name = "WO Name", age = "0", alias = "WO Alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }

}
let person3 = new DefaultPerson() 
console.log(person3)
console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "cono"
console.log(person3.alias)


// Functions in classes
class PersonWithMethod{

    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk(){
        console.log("The person walks")
    }

}

let person4 = new PersonWithMethod("Pol", 19, "cono")
person4.walk()


// Private Properties

class PrivatePerson{

    #bank

    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay(){
        this.#bank 
    }
}

// You make the variables of a class private with #bank


// Getters and Setters
 
class GetPerson{

    #name
    #age
    #alias 
    #bank

    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name(){
        return this.#name
    }

    set bank(newBack){
        this.#bank = newBack
    }

    pay(){
        this.#bank 
    }
}

person33 = new Person("Pol", 19, "cono", "IBAN126782689")
console.log(person33)
console.log(person33.name)

person33.bank = "new IBAN123"


// Inheritance

class Animal {
    constructor(name){
        this.name = name
    }

    sound(){
        console.log("Emite un sonido")
    }
}


class Dog extends Animal{

    sound(){
        console.log("Guau") // Overcharging a method
    }


    run(){
        console.log("The dog runs")
    }



}


class Fish extends Animal{

    constructor(name, size){
        super(name)
        this.size = size
    }
}


let myDog = new Dog("Pol's Dog")
myDog.run()
myDog.sound()


let myFish = new Fish("Pol's Fish")
myFish.sound()


// Static Methods

class MathOperations {
    static sum(a,b){
        return a + b
    }
}

console.log(MathOperations.sum(5,10)) // It's a static method so we don't have to instatiate an element.


