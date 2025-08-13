// Exporting Modules

export function add(a,b){
    return a + b
}

console.log(add(5,10))


// Properties

export const PI = 3.141592
export let name = "Pol"

export default function subtract(a, b){
    return a - b
}


// Classes

export class Circle{

    constructor(radius){
        this.radius = radius
    }

    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }


}