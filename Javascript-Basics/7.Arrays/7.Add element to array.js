// With the array.push() method we can add an element to an array. It can be applied to an existing array to append new values to the end of the array.
// In the example below, we apply the array.push() method to extend the array numbers with the number 3. To solve this task, append another number to the end of the array. Use the correct number such that the console.log() statement to log true.


let arr = [1,2,3];

arr.push(-1);
arr.push(100);

console.log(arr); // [1,2,3,-1,100]

console.log(arr.length == 5); // true
