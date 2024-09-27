// The functino func declare a parameter x and returns the property length of x.
// Transform x into a rest parameter so that its value is of type array with legnth 2.


// function func(x){
//     return x.length;
// }
// console.log(func([1,2,3])); // 3

function func(...x){
    return x.length;
}
console.log(func(...[1,2,3])); // 3
