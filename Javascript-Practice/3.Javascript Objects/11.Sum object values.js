// Write a function that takes an object (a) as argument. Return the sum of all object values.


// function myFunction(a){
//     return
// }



function myFunction(a){
    return Object.values(a).reduce((acc,cur)=>acc+cur, 0);
}