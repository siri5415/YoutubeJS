const howManyLetter = (phrase) =>{
    // counter
    let result = 0;

    //for of
    for (const index in phrase){
        console.log(Number(index) +1 );
        result = Number(index) + 1
    }
     return  {result}
}
    const phrase = prompt('write your phrase')

console.log(howManyLetter(phrase))

        //   (or) 

        
const howManyLetter1 = (phrase1) =>{
     return {result:phrase1.length}
}
const phrase1 = prompt('write the your phrase1')

console.log(howManyLetter1(phrase1));