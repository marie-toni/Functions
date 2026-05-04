//1)basic functions

//function greet() can accept any variable e.g name, these methods need something to be passed 
// in it in order to make it complete, if the name function isn't passed (in this case), the greet() won't be complete 
function greet(name){
    return "Hello " + name
}

console.log(greet('Mary'));


//2)function Expression
const greet = function(name)(
    return "Hello " + name
)

console.log(greet("Kachi"));

//3)arrow function
const greet = (name) => {
    return "Hello " + name
}


//In another file (e.g math.js, a function is created but when the function is called here, it doesn't work.
//this is because, it is yet to be exported here and imported there. 
// Just like the ones on the files/apps downloaded during the API creation, we see a lot of imports there, now you are creating your own )

//go and learn anonymous functions