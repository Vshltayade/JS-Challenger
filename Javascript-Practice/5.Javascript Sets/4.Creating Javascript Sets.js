// Write a function that takes three elements of any type as arguments. Create a Set from those elements. Return the result


function myFunction(a, b, c){
    let set = new Set();
    set.add(a);
    set.add(b);
    set.add(c);
    return set;
}

console.log(myFunction(1, 'b', 3)); // Set(3) { 1, 'b', 3 }
console.log(myFunction(NaN, null, false)); // Set(3) { NaN, null, false }
console.log(myFunction('a', ['b'], { c: 3 })); // Set(3) { 'a', [ 'b' ], { c: 3 } }
