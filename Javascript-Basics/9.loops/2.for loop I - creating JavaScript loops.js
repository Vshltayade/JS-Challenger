// In the code below we have a for-loop where we create a counter-variable i with the value 1. As long as i is smaller than 3 the loop keeps running. After each iteration i is incremented by 1. In each iteration we log the current value of i. We also add the value of i to the variable result.
// Task: Adjust the code such that the console.log() logs true.
// Hint: Be careful not to implement an infinite loop!

let result = 0;

for(let i=0; i<3; i++){
    console.log(i);
    result += i;
}

console.log(result); // 3

