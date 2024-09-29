// Write a function that takes an array of strings as argument. Return the longest string.


function myFunction(arr){
    return arr.reduce((p,c)=>p.length<=c.length?c:p)
}