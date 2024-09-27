// Sometimes we want to know where a specific element is located inside an array. That's what the method array.indexOf() is for. This method returns the index position of a specific element inside an array.
// For example ['a', 'b'].indexOf('a') returns 0 because that's the index of the string 'a' within the given array.
// You can also find out if a specific element is not present inside an array. ['a', 'b'].indexOf('c') returns -1 which means that 'c' does not exist in the array.
// In the code below we use the array.indexOf() method to get the index of an element. Later on, we use that index to retrieve this element and compare it to the expected value. But there is something mixed up. Change the code below such that the console.log() statement logs true.


let arr = ['a','b','c'];

let index = arr.indexOf('b');

console.log(arr[index] == 'b'); // true
