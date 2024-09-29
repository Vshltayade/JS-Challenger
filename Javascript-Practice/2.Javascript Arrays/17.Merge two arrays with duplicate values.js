// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array


function myFunction(a,b){
    // let newArr = a.concat(b);
    // let newSetArr = [...new Set(newArr)].sort((a,b)=>a-b)
    // return newSetArr

    // let merged = a.concat(b);
    // let noDuplicate = Array.from(new Set(merged));
    // let sorted = noDuplicate.sort((a, b) => a - b);
    // return sorted;

    return [...new Set([...a, ...b])].sort((x, y) => x - y);
}