//Array Methods
let cars = ["BMW","Volvo","Honda"]

//toString() : Convert an array into string
console.log("The result of the :" + cars.toString());

//pop() : Remove the last element form an arrays
let last1 = cars.pop();
console.log("The result of the :" + last1);
let last2 = cars[cars.length -1];
console.log("The result of the :" +last2);


//push():Add a new element at the end of an array.
cars.push("Audi");
console.log("The result of the :" + cars);


//shift():Remove the first element from an arrays.
cars.shift();
console.log("The result of the :" +cars);

//unshift():Add an element at the begining of an arrays.
cars.unshift("Hyundai");
console.log("The result of the : " +cars);

//concat():Create a new array by merging existing arrays.
let bikes = ["Yamaha","Suzuki","Duke"];
let vehicles = cars.concat(bikes);
console.log("The result of the :" + vehicles);

//Sort():Sort an array ascending order.
vehicles.sort();
console.log("The result of the :" +vehicles);

//Reverse() : Reverse the element of an array.
vehicles.reverse();
console.log("The result of the :" +vehicles);