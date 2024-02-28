// const fruits = ['apples','banana','graphes','gova',
// 'apples','banana','graphes','gova']

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// for (let i=0; i < fruits.length; i++){
//     console.log(i,fruits[i])
// }

//fruits: condition for the loop to run

//i++ : Increments the index

// for (const fruits of fruits){
//     console.log(fruits);
// }


// const numbers = [1,2,3,4,5,6]
// for (let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }


// for (const numbers of numbers){
//     console.log(numbers);
// }
//sum up all numbers in array

//loop through console log each element of the below array



//Modify the function below to log the double of each number



const numbers = [1,2,3,4,5,6]
const double = (numbers) =>{
let result = [];
for (const number of numbers) {
  result.push(number ** 2);
}
   return result
}

console.log(double([1,2,3,4,5,6]));