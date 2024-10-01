// This is a more difficult challenge. Write a function that takes two date instances as arguments. It should return an object with the properties 'hrs', 'min', and 'sec'. The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds.


// function myFunction(a,b){
//     return
// }


function myFunction(a,b){
    let obj = new Object();
    obj['hrs'] = Math.abs(a.getHours()-b.getHours());
    obj['min'] = Math.abs(a.getMinutes()-b.getMinutes());
    obj['sec'] = Math.abs(a.getSeconds()-b.getSeconds());
    return obj;
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); // { hrs: 0, min: 45, sec: 0 }
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 04:00:00'))); // { hrs: 4, min: 0, sec: 0 }
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:20:55'))); // { hrs: 1, min: 20, sec: 55 }
