// In this exercise, the function func defines the parameters a and b. But, currently only 1 argument is passed to the function. Therefore, the value of b is undefined.
// Adjust the code below so that the console.log() statement logs hello world.

const func = function(a,b){
    return `${a} ${b}`;
}

// console.log(func('hello'));
console.log(func('hello', 'world')); // hello world

