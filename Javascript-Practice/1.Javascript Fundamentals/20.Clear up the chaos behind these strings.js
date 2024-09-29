// It seems like something happened to these strings. Can you figure out how to clear up the chaos? Write a function that joins these strings together such that they form the following words:. 'Javascript', 'Countryside', and 'Downtown'. You might want to apply basic JS string methods such as replace(), split(), slice() etc.


function myFunction(str1, str2){
    str1 = str1.replace('%','');
    str2 = str2.replace('%','').split('').reverse().join('');
    console.log(str1+str2);
}

myFunction('java', 'tpi%rcs')   // returns 'javascript'
myFunction('c%ountry', 'edis')	// returns 'countryside'
myFunction('down', 'nw%ot')		// returns 'downtown'