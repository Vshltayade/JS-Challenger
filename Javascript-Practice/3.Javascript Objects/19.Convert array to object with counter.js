// Write a function that takes an array of numbers as argument. Convert the array to an object. It should have a key for each unique value of the array. The corresponding object value should be the number of times the key occurs within the array.

function myFunction(arr){
    arr.sort()
    let  obj = {...arr};
    for(let k in obj){
        let count = 0;
        for(let v of Object.values(obj)){
            if(k == v) ++count;
        }
        obj[k]=count;
    }
    return obj
}

console.log(myFunction([1,2,3,4,5,1,1,2,5,5,5]))