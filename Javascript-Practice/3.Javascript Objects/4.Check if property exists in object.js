// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Hint: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.


// function myFunction(a,b){
//     return
// }


function myFunction(a,b){
    // return a[b] ? true : false;
    return b in a
}