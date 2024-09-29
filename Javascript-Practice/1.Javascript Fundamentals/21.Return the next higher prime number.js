// This challenge is a little bit more complex. Write a function that takes a number (a) as argument. If a is prime, return a. If not, return the next higher prime number.

function nextPrime(num){
    for(let i=num; i>0; i++){
        if(isPrime(i)) return i
    }
}

function isPrime(num){
    let flag = false;
    for(let i=0; i<num/2; i++){
        if(num%(i+2)==0) flag = true;
    }
    if(flag) return !flag;
    return !flag;
}

function thisOrNextPrime(num){
    if(num <= 2) return 2;
    if(!isPrime(num)) return nextPrime(++num);
    else return num;
}

console.log(thisOrNextPrime(7)); 

console.log(thisOrNextPrime(50));
