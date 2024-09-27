// In this scenario we use template literals to combine strings. Template literals allow you to dynamically insert a string into another string at a specific position. When using template literals you create strings with backticks (`). You can inject a JavaScript expression using ${expression} — e.g. ${1+1} which would insert 2 into the string.
// Adjust the code below such that the value of the variable word is inserted into the string of the variable sentence. Run the code to see if the complete sentence is logged.

// const word = 'welcome';
// const sentence = 'to javascript';
// console.log(sentence);



const word = 'welcome';
const sentence = `${word} to javascript`;
console.log(sentence); // welcome to javascript