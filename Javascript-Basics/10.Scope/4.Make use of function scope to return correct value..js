// Use what you have learned about Function Scope to make the function multiply return the value 50.

// function multiply(num){
//     return num * 10
// }

// console.log(multiply(5)); // 50


let res = 0;

function multiply(num){
    res = num * 10;
}

multiply(5);
console.log(res); // 50
