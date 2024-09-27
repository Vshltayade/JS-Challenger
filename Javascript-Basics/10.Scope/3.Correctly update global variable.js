// We want to use the function func to update the global variable x. But when we run the code, the value of global x is not updated. Adjust the code so that the final value of global x is 2.


var x = 0;

function func(){
    x = 2;
}

func();
console.log(x); // 2
