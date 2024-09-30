// Write a function that takes an array of objects and a string as arguments. Add a property with key 'continent' and value equal to the string to each of the objects. Return the new array of objects. Hint: try not to mutate the original array


function myFunction(arrOfObj, str){
    return arrOfObj.reduce((acc,cur) => {
        cur['continent'] = str;
        acc.push(cur)
        return acc;
    }, []);
}

console.log(myFunction([{a:1}, {b:2}, {c:3}], 'asia'));
// [{ a: 1, continent: 'asia' }, { b: 2, continent: 'asia' }, { c: 3, continent: 'asia' }]
