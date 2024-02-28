//ES6

//Arrow functions

//Arrow functions allow us to write shorter function syntax

//Regular functions (old)
function myFunction(name){
    console.log(`hi ${siri}`);
}

//Arrow functions (new)
const myFunction = (name) =>{
    console.log(`hi ${Nava}`);
}
 

//Arrow functions  =>
//arrow function with explicit return
const aumArrow = (a,b) =>{
    return a + b 
}

//arrow function with implicit return
// Important : For implicit return,remove curly braces
const sumArrow1 = (a,b) => a +b 

console.log(sumArrow1(10,50));