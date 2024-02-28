//Arrays
let cars = ["BMW","Volvo","Honds"]
console.log("The result of the :" +cars);


//Array operations
let Honds = cars[1];
console.log("The result of the :" + Honds);


//Arrays length property
let length = cars.length;
console.log("The result of the:" + length);

//Arrays Access last array item
let last = cars[cars.length-1];
console.log("The result of the :" +last);

//Loop Over an arrays item
cars.forEach((item,index,array)=>{console.log(item,index);});