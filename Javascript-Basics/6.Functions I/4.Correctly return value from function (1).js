// In this exercise, we create a function func. Then, we call func and assign its return value to the variable result.
// When you run the code like this, you see that the value undefined is logged. This is the current return value of func because we do not explicitly define a return value ourselves.
// Let func return the value of the variable text.


function func(){
    const text = 'hi';
    return text;
}

const result = func();

console.log(result); // hi
