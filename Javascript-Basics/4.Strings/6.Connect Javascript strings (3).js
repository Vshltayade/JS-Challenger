// Here we created a string with backticks (`). But, we forgot to wrap the term 1+1 with the correct syntax. What we want is that it is recognized as a JavaScript expression and evaluated as such.
// Adjust the code below such that the term 1+1 is evaluated and the result inserted into the string.

// const str = `1+1`;
// console.log(str);


const str = `1+1 is ${1+1}`;
console.log(str); // 1+1 is 2
