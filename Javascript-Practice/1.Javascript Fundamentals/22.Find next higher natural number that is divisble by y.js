// Write a function that takes two numbers, say x and y, as arguments. Check if x is divisible by y. If yes, return x. If not, return the next higher natural number that is divisible by y


function nextNatural(num,y){
    for(let i=num; i>0; i++){
        if(i%y==0) return i;
    }
}

function isDivisible(x,y){
    if(x%y == 0) return x;
    return nextNatural(++x,y);
}

console.log(isDivisible(81,3));

console.log(isDivisible(234,34));
