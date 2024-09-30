// Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.


// function myFunction(a,b){
//     return
// }


function myFunction(a,b){
    // let obj = new Object();
    // for(let i=0; i<a.length; i++){
    //     obj[n[i]] = b[i]
    // }
    // return obj;
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}