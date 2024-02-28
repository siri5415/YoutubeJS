//Functions 

//A Javascript function is a block of code designed to perform a particular task and is executed when "something" calls it.

// function sayMyName(){
//     console.log('Siri');
//     console.log('Nava');
//     console.log('Lakshmi');
//     console.log('Saida');
// }
// sayMyName()

//Dynamic function

// function sayMyName1(name){
//     console.log(name);
// }
// sayMyName1('Siri')

//Function arguments are the values received by the function when it is called, they behave as variables, however they only live within the
// functon and cannot be accessed outside.


//This is a function called 'sayMyName'
//and it has 0 arguments
//does: it logs out your name to the console
// function sayMyName(){
//     console.log('Nava');
// }
// // sayMyName()


//this is a function called "sayMyName"
// it has 1 argument called 'name'
//does: t logs out your name to console
// function sayMyName2(name){
//     console.log(name);
// }
// // sayMyName2('Siri')



// function greeting(name){
//     greet = 'hi ' + name + ' Nice to meet you!'
//     console.log(greet);
// }
// greeting('Siri')

//Template literals provide an easy way to interpolae variables and expressions into strings.

//Interpolation is an efficient way to concatenation.
// function greeting(name) {
//     greet = `hi ${name}, Nice to meet you!`
//     console.log(greet);
// }
// greeting('Navaroja')


//Add two numbers.
// @param {number} num1 The first number to add.
//@param {number}  num2 the second number to add.
// @return {number} The result of adding num1 and num2


//This is the standard way of documenting through commenting.

//Fnd more information on jsdoc.app


function sum(a,b){
    //return
    //The return staement stops the execution of a function and returns a value.

    // return a + b
    console.log(a + b);
}
num1 = sum(1, 2);
console.log(num1)


function calculateFoodTotal(food,tip){
   const  tipPercentage = tip/ 100;
    const tipAmount = food * tipPercentage;
    const total = sum(food, tipAmount);
    return total
}
console.log(calculateFoodTotal(300,20));
//Pretttifies the codee you wrote.helps other developers to collabrate on the same project