// In the console.log() statement below we use the Strict Inequality operator to check whether numOne and numTwo have different values or if they are of different types. And we also use the Equality operator to check whether numOne and numTwo have the same value (not considering their types). Change the code so that both expressions inside the console.log() statement logs true.


// const numOne = 5;
// const numTwo = 5;
// console.log(numOne !== numTwo, numOne == numTwo); // false true



const numOne = 5;
const numTwo = '5';
console.log(numOne !== numTwo, numOne == numTwo); // true true