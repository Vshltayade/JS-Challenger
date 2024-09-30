// Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.


// function myFunction(a,b)){
//     return
// }


function myFunction(a,b){
    // for(let k in a){a.k=a.k*b}
    // return a

    return Object.entries(a).reduce((acc, [key, val]) => {
        return { ...acc, [key]: val * b };
    }, {});
}