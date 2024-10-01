// Write a function that takes a Set and an array as arguments. If not already existing, add each element in the array to the Set. Return the modified Set


function myFunction(set, arr){
    arr.forEach(element => {
        set.has(element) ? null : set.add(element);
    });
    return set;
}

console.log(myFunction(new Set([1,2,3]), [1,2,3])); // Set(3) { 1, 2, 3 }
console.log(myFunction(new Set([1,2,3]), ['a',true])); // Set(5) { 1, 2, 3, 'a', true }
