// What are Javascript functions?
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function My_function(val){
    console.log("The result of the :" + val*val);
}
My_function(5)



// function expression:
// ~~~~~~~~~~~~~~~~~~~~
let x = function(){
    alert("Hello! ")
}
let y = x
console.log("The result of the :" +y());


//The function Constructors:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Javascript function are defined using the keyword function.

//Function can also be defined using the bulit-in javascript function constructor called Function().
var Myfunction = new Function("a","b", "return a+b")
var x1 = Myfunction(2,3)
console.log("The result of the :" +x1);


//self-invoking Functions:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// A self-invoking expression is invoked (started) automatically.without being called self-invoked.

// Function expressions will execute automatically if the expression is followed ByteLengthQueuingStrategy().

// you have to add parentheses around the function to indicate that it is a function expression.
 (function(){
    alert("Hello welcome")
 })()


 //Function as values:
// ~~~~~~~~~~~~~~~~~~~~~~
// In Javascript, a function is a value,so we can deal with it as a value.

// We first define the function and then assign it to a variable unlike in expressions.

function Product(a,b){
    return a*b
}
let y1 = Product(2,5)*5
console.log("The result of the :" + y1);


//Function as objects:
// ~~~~~~~~~~~~~~~~~~~~~~
// Javascript function are a special type of objects,called function objects.

// A function object includes a string which holds the actual code i.e., the function body of the function.

var body = "return Math.PI * rad * rad "
var circle = new Function("rad",body);
alert(circle(5));


//Arrow Functions:
// ~~~~~~~~~~~~~~~~~~~
// function can be written more compactly with the helps of Arrow function.

// Arrow function expressions are ill suited as methods,and they cannot be used as constructors.
const Myfunc = (a,b,c) => {return a*b*c}
let Product1 = Myfunc(2,3,4)
console.log("The Product of the three digits :" +Product1);


function* generateFunc(){
    yield -1;
    yield 2;
    yield 3;
}
let generator = generateFunc();
let one = generator.next();
let two = generator.next();
let three = generator.next();
alert(JSON.stringify(one));
alert(JSON.stringify(two));
alert(JSON.stringify(three));


//Predefined Functions():
// ~~~~~~~~~~~~~~~~~~~~~~~~~
// eval: Evaluates a string and returns a value
// ~~~~~

//parseInt: Parses a string argument and return an integer of the specified radix or base.
// ~~~~~~~~~~~

//ParseFloat: Parses a string arguments and returns a floating-pointer number.
// ~~~~~~~~~~~~~~
 
//Escape: Return the hexadecimal encoding of an arguments
// ~~~~~~~~~

//Unescape: Return the ASCII string for the specified values.
// ~~~~~~~~~~~~

