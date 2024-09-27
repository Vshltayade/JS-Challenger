// The conditional (ternary) operator can be used to replace simple if...else statements. The syntax is: condition ? if true : else. If the condition is met, the code after the question mark (?) is executed. If it is not met, the code after the semicolon (:) is executed. In simple if-else scenarios the conditional (ternary) operator can save a lot of code.
// In this example we use the conditional (ternary) operator to assign a value to the variable text depending on the value of num. Adjust the code such that the value of text will be 'num is greater than 3'.


let text = '';
const num = 5;
num > 3 ? text = "num is greater than 3" : text = "num is smaller than 3"
console.log(text); // num is greater than 3
