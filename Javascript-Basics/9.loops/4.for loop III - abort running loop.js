// In this exercise you will learn how to abort a running loop even though its condition is still satisfied.
// You can use the break statement to achieve this. You can place the break statment anywhere inside the code-block of a loop. As soon as break is evaluated, the loop is terminated. Usually, you would place break behind an if condition. Then, the loop will only abort if a certain condition met.
// In the example below, we iterate through the elements of the array mixed. In each iteration, we append the current element of mixed to the new array newArray. But, in this exercise we want to abort the loop if the current element is not of type number.
// Complete the if statement below and execute break if the current element is not of type number.


let mixed = [0, 1,'a',2,'b',3,'c'];
let newArray = [];

for(let i=0; i<mixed.length; i++){
    if(typeof mixed[i] == 'number')newArray.push(mixed[i]);
    else break;
}

console.log(newArray); // [0,1]