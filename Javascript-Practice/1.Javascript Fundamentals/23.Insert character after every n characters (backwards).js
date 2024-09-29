// Write a function that takes two strings (a and b) as arguments. Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'. Return the resulting string.


function insertBackCharacter(a,b){
    a = a.split('').reverse();
    let num = 0;
    for(let i=0; i<=a.length;i++){
        num++;
        if(num == 4){
            num = 0;
            a.splice(i,0,b)
        }
    }
    console.log(a.reverse().join(''));   
}

insertBackCharacter('welcome to javascript', '[@]');
// [@]wel[@]com[@]e t[@]o j[@]ava[@]scr[@]ipt