// Write a function that takes a Date instance as argument. It should return the next nearest quarter hour in minutes. For example, if the given date has the time 10:01 the function should return 15


// function myFunction(a){
//     return
// }


function myFunction(a){
    return a.getMinutes()>=0 && a.getMinutes()<15 ? 15 : (a.getMinutes()>=15 && a.getMinutes()<30 ? 30 : (a.getMinutes()>=30 && a.getMinutes()<45 ? 45 : (a.getMinutes()>=45 && a.getMinutes()<60 ? '00' : '')))
}

console.log(myFunction(new Date('2000/01/01 08:01:00'))); // 
console.log(myFunction(new Date('2000/01/01 08:25:00'))); // 
console.log(myFunction(new Date('2000/01/01 08:40:00'))); // 
console.log(myFunction(new Date('2000/01/01 08:50:00'))); // 
