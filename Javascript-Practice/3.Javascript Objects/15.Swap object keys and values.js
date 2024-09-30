// Write a function that takes an object as argument. Somehow, the properties and keys of the object got mixed up. Swap the Javascript object's key with its values and return the resulting object


function myFunction(obj){
    return Object.entries(obj).reduce((acc, [k,v]) => {
        return { ...acc, [v]:k}
    },{})
}

console.log(myFunction({ 1:'a', 2:'b', 3:'c' }));// { a: '1', b: '2', c: '3' }