// Using what we learned earlier, let's write a generic function that returns the last element of an array we pass to it. As you can see, we use that function to get the last element of both arrOne and arrTwo. But, the function is not complete yet. Add what's missing to get the last element of any array we pass to it – you may need to use the Array.length property.

let arrOne = [1,2,3,4,5];
let arrTwo = ['a','b','c'];

function lastEle(arr){
    return arr[arr.length-1];
}

console.log(lastEle(arrOne)); // 5
console.log(lastEle(arrTwo)); // c
