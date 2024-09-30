// Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.


// function myFunction(a,b){
//     return
// }


function myFunction(a,b){
    // let obj = {};
    // obj[a] = b;
    // return obj;
    return {[a] : b};
}