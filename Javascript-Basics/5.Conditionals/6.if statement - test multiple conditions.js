// As we have seen in a previous exercise, you can chain multiple expressions using logical operators. We can use this to test multiple conditions in 1 if-statement.
// The code below is missing 1 expression after the logical AND (&&) operator inside the if-condition. Adjust the code such that the value of result will be true. Another possible condition could be numTwo to strictly equal 6.

let result = false;
const numOne = 1;
const numTwo = 6;
if(numOne < numTwo && numTwo === 6){
    result = true;
    console.log(result); // true
}