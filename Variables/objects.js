//Objects
//Key: value pairs
//objects are a type of variables,quite similar to arrays but they have something called key-value pairs.

const person = {
    name: 'Siri', 
    shirt: 'pink'
}

//access objects: dot notation vs. bracket notation
console.log(person.name)
console.log(person.shirt)

//bracket notation
console.log(person['name']);
console.log(person['shirt']);

//assign objects
person['phone'] = '1-222-333-4444',
console.log(person.phone);

console.log(person);

//person2
const person2 = {
    name: 'Siri',
    shirt: 'black',
}
console.log(person2);
console.log(person2.name);
console.log(person2.shirt);

//es6 arrow function (2 arguments)
//object
//templates literals

const introducer = (name,shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: 100000,
        libility : 50000,
        networth: function(){
            return this.assets - this.libility
        }
    }
const intro =`Hi,my name is ${person.name} and the color of my shirt is $${person.shirt} and my net worth is ${person.networth()} USD`

return intro
}
console.log(introducer('Siri','white'));
console.log(introducer('Nava','black'));

//Method is a property containing a function defintion