// Sounds easy, but you need to know the trick. Write a function that takes two date instances as arguments. It should return true if the dates are equal. It should return false otherwise.


// function myFunction(a,b){
//     return
// }



function myFunction(a,b){
    return a.getTime() == b.getTime();
    // return a.getFullYear()==b.getFullYear() && a.getMonth()==b.getMonth() && a.getDay()==b.getDay() && a.getHours()==b.getHours() && a.getMinutes()==b.getMinutes() && a.getSeconds()==b.getSeconds();
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
console.log(myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
