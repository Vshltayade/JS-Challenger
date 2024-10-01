// Write a function that takes as argument a date instance (a) and a number (b). It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC.


// function myFunction(a,b){
//     return
// }


function myFunction(a,b){
    addTime = b*86400000;
    newTime = a.getTime() + addTime
    return newTime;
    return (new Date(newTime)).toString();
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), 1)); // 946780200000
console.log(myFunction(new Date('2000/01/01 08:45:00'), 210)); // 964840500000
console.log(myFunction(new Date('2000/01/01 08:00:00'), 1212)); // 1051410600000
