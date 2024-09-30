// Write a function that takes an object as argument. Some of the property values contain empty strings. Replace empty strings and strings that contain only whitespace with null values. Return the resulting object


function myFunction(obj){
    return Object.entries(obj).reduce((acc, [k,v]) => {
        /^\s*$/.test(v) ? v=null : v
        return {...acc, [k]:v}
    },{})
}

console.log(myFunction({ a: '', b: ' ', c: 3 })); // { a: null, b: null, c: 3 }
