// Use the multiply function as a callback function within getValue so that the final value of b is 10.


// let a = 2;
// let b = 2;
 
// function multiply() {
//    b = a * b;
//    console.log(`The value of b = ${b}`);
// }
// function getValue(callback) {
//    setTimeout(function() {
//       a = 5;
      
//    }, 500);
// }
// multiply();

// getValue(multiply);


let a = 2;
let b = 2;
 
function multiply() {
  b = a * b;
  console.log(`The value of b = ${b}`);
}
function getValue(callback) {
  setTimeout(function() {
    a = 5;
    callback()
  }, 500);
}
getValue(multiply);
//10