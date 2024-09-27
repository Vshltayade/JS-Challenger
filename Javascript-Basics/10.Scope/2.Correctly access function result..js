// Here, we have a function calculatePrice that calculates the total price of a product. We execute that function and save the result in the variable total.
// But, the code will not work like this because we can not access the variable result from outside the function. Correctly save the result of calculatePrice in the variable total.


let result = 0;

function calculatePrice(price){
    result = price * 10;
}

calculatePrice(99);

console.log(result); // 990
