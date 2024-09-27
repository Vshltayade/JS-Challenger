// This exercise is very similar to the previous one. But, this time we also have an else statement. An else statement is another piece of code – wrapped by curly braces – that only runs if the condition is not satisfied.
// Adjust the condition such that the code inside the else statement will be executed and the console.log() statement logs true.

let text = 'hello';
if (text !== 'hello') {
   text = text + ' world';
} else {
   text = text + ' world';
}
console.log(text === 'hello world'); // true