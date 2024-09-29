// Write a function that takes an array (a) and a value (n) as arguments. Save every nth element in a new array. Return the new array



function myFunction(arr,val){
    let narr = [];
    let count = 1
    arr.forEach(e => {
        if(count !== val) count++
        else {
            narr.push(e);
            count=1;
        }
    });
    return narr
}
console.log(myFunction([1,2,4,5,6,7,8,9,3,12,34,56,78,90],2)); // [2,  5,  7, 9, 12, 56, 90]
console.log(myFunction([1,2,4,5,6,7,8,9,3,12,34,56,78,90],3)); // [ 4, 7, 3, 56 ]
console.log(myFunction([1,2,4,5,6,7,8,9,3,12,34,56,78,90],4)); // [ 5, 9, 56 ]

