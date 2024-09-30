// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.


// function myFunction(a,b){
//     return
// }


function myFunction(a,b){
    // return Boolean(a[b]);
    return a[b] ? true : false;
}