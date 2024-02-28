//For loop

let x;
for(x=0; x<5; x++)
    // x=0  =>Counter variables - keeps track of how many times the code has been executed.
    // x<5  =>condition code - Keeps looping until the condition is met.
    // i++  =>counter variable increment usually + 1.

console.log("The result of the :"+ x);


//While loop:
// ~~~~~~~~~~~~~
// while(variable < endingCondition)

// variables:  The variables is the value that will change.
// ~~~~~~~~~

//endingCondition: Maximum value a variable can reach.
// ~~~~~~~~~~~~~~~~~~

//while loop
let x1 = 1;
while(x<=5){
    console.log(x1);
    x++
}

//Do-while loop
let x2=5;
do{
    console.log("The result of the :" +x2);
    x2++
} 
while(x2<10)


//Break out of loop:
// ~~~~~~~~~~~~~~~~~~~~
// Break is used to break out of a loop.
let x3;
for(x3=1;x3<=10;x3++){
    console.log("The result of the :" +x3);
    if(x==5)
    break
}


//Skipping a loop cycle:
// ~~~~~~~~~~~~~~~~~~~~~~~~
// To skip a particular loop,continue is used
let x4;
for(x4=1;x4<=10;x4++){
    if(x4==5)
    continue
console.log("The result of the :" +x4);
}