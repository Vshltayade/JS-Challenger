// Write a function that takes an array of strings as argument. Group those strings by their first letter. Return an object that contains properties with keys representing first letters. The values should be arrays of strings containing only the corresponding strings. For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to. { a: ['Alf', 'Alice'], b: ['Ben']}



function myFunction(arr){
    // arr.sort();
    let obj = new Object();
    for(let ele of arr){
        obj[ele.toLowerCase()[0]] = []
    }
    for(let ele of arr){
        obj[ele.toLowerCase()[0]].push(ele)
    }
    
    return obj
}


console.log(myFunction(['Alf', 'Ben',  'Alice']));
//{ a: [ 'Alf', 'Alice' ], b: [ 'Ben' ] }