// Write a function that takes an array with arbitrary elements and a number as arguments. Return a new array, the first element should be either the given number itself. or zero if the number is smaller than 6. The other elements should be the elements of the original array. Try not to mutate the original array


function myFunction(arr, num){
    return [arr[0]<6?0:arr[0], ...arr.slice(1)]
}

let arr = [1,3,4,6,8,4,3,7,9]

console.log(myFunction(arr, 5));
console.log(arr);

arr = [8,4,3,7,9]

console.log(myFunction(arr, 5));
console.log(arr);
