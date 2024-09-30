// Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'



// function myFunction(obj){
//     return
// }



function myFunction(obj){
    // delete obj.b
    // return obj

    // const { b, ...rest } = obj;
    // return rest;

    return delete obj.b && obj
}