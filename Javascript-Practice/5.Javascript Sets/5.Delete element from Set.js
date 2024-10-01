// Write a function that takes a Set and a value as argument. If existing in the Set, remove the value from the Set. Return the result


function myFunction(set, val){
    return set.has(val) ? set.delete(val) && set : set;
    return set.delete(val) ? set : set;
    set.delete(val);
    return set;
}

console.log(myFunction(new Set([1, 2, 3]), 1)); // Set(2) { 2, 3 }
console.log(myFunction(new Set('12345'), '3')); // Set(4) { '1', '2', '4', '5' }
console.log(myFunction(new Set([1, 2, 3]), 4)); // Set(3) { 1, 2, 3 }
