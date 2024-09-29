// Write a function that takes two numbers (min and max) as arguments. Return an array of numbers in the range min to max


function myFunction(min,max){
    return Array(max-min-1).fill(0).map(e=>++min)
}

console.log(myFunction(3,7));
