// Write a function that takes a string as argument. As it is, the string has no meaning. Increment each letter to the next letter in the alphabet. Return the correct word


// let alphabets = 'abcdefghijklmnopqrstuvwxyz';

let str = 'gdkkn';

for(let i=0; i<str.length; i++){
    // str = str.replace(str[i],alphabets[alphabets.indexOf(str[i])+1])
    str = str.replace(str[i],String.fromCharCode(str.charCodeAt(i)+1))
}

console.log(str);
