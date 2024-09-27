// Adjust the code snippet so that the value 0 is logged first and then the value 1.


// let count = 0;
// function increment() {
//  count = count + 1;
// }
// increment();
// setTimeout(() => {
  
//   console.log(count);
// }, 1000);
 
// console.log(count);



let count = 0;
function increment() {
 count = count + 1;
}
// increment();
setTimeout(() => {
  increment();
  console.log(count);
}, 1000);
 
console.log(count);
//0
//1