// Our second for-loop exercise shows how you can use a loop to iterate over the elements of an array. In this example, we will filter numbers from an existing array. The loop iterates over each element of the array mixed. If the current element is of type number, it will append it to the array newArray.
// To solve this task, complete the loop expressions inside the brackets.


let mixed = [1,'a',2,'b',3,'c'];
let newArray = [];

for(let i=0; i<mixed.length; i++){
    if(typeof mixed[i] == 'number')newArray.push(mixed[i]);
}

console.log(newArray); // [1,2,3]
