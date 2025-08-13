// Exception

let myObject
//console.log(myObject.email) // It's undefined so no (Throws exception)

// try-catch


try{
    console.log(myObject.email)
    console.log("No errors")
} catch{
    console.log("Error")
}

// Capturing the error

try{
    console.log(myObject.email)
    console.log("No errors")
} catch (error){
    console.log("Error:", error.message)
} finally{ // Executes the code always even if it throws exception
    console.log("This will print always")
}


// Throwing Error

//throw new Error("Something went bad") 

function sum(a,b){
    if(!Number.isInteger(a) || !!Number.isInteger(b)){
        throw new Error("Cannot sum this entries")
    }
    return a + b
}

try{
    console.log(sum(5,10))
    console.log(sum("5",10))
} catch (error){
    console.log("An Error Occured")
}


