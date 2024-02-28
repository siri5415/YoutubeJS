//Constructor function
let person = function( name, gender, birthyear){
     this.name = name;
     this.gender = gender;
     this.birthyear = birthyear;
     this.calculateAge = function(){
         let age =  new Date().getFullYear() - this.birthyear;
         console.log(age);
     }
}


let siri = new person('siri', 'Female', 2000);

//let siri = {}
//this = siri
//siri.name = 'siri';
//siri.gender = 'Female';
//siri.birthyear = 2000
//siri.calculateAge = f(){}



// siri.calculateAge();
console.log(siri);

let nava = new person('Nava','Female',2002);
console.log(nava);

let lakshmi = new person('lakshmi', 'Female', 2003);
console.log(lakshmi);


// let now = new Date ();
// let str = new String();