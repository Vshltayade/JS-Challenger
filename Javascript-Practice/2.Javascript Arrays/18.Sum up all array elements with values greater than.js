// Write a function that takes an array (a) and a number (b) as arguments. Sum up all array elements with a value greater than b. Return the sum


function myFunction(a,b){
    let sum = 0;
    for(let ele of a){
        if(ele>b) sum+=ele
    }
    return sum
}

console.log(myFunction([1,2,3,4,5],3));
