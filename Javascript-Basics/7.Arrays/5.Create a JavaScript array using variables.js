// You can put any value inside an array. Here, the array named arr even contains another array. You can also insert values from other variables into the array.
// Insert the value of the variable string into the arr. Insert it in the right place so that the console.log() statement logs true.

let string = 4;
let inArr = [5,6]
let arr = [1,2,3,string,inArr];

console.log(arr); // [ 1, 2, 3, 4, [ 5, 6 ] ]

console.log(arr.includes(4)); // true
