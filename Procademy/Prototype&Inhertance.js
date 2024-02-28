let person = function (name, gender, birthyear) {
  this.name = name;
  this.gender = gender;
  this.birthyear = birthyear;
//   this.calculateAge = function () {
//     let age = new Date().getFullYear() - this.birthyear;
//     console.log(age);
//   };
};

person.prototype.calculateAge = function () {
  let age = new Date().getFullYear() - this.birthyear;
  console.log(age);
};

person.prototype.city = 'Guntur';

let siri = new person("siri", "Female", 2000);
// siri.calculateAge()
console.log(siri.hasOwnProperty('city'));

let nava = new person("Nava", "Female", 2002);
// nava.calculateAge()
console.log(nava);

let lakshmi = new person("lakshmi", "Female", 2003);
// lakshmi.calculateAge()
console.log(lakshmi);



//prototype changing in Javascript
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Every object we create in javascript in directlt or indirectly an instance of object constructor
let mark = {
    name : 'Sireesha',
    birthyear : 2000,
    gender : 'Female',
}

console.log(mark.hasOwnProperty('name'));
//let mark = new object(); -empty object
// mark.name = 'Sireesha';
//mark.birthyear = 2000;
// mark.gender = 'Female';



let arr = [10,20,30];
console.log(arr);
//new Array()
arr.push();