// Write a function that takes an object as argument containing properties with personal information. Extract firstName, lastName, size, and weight if available. If size or weight is given transform the value to a string. Attach the unit cm to the size. Attach the unit kg to the weight. Return a new object with all available properties that we are interested in


function myFunction(obj){
    return Object.entries(obj).reduce((acc, [k,v]) => {
        switch(k){
            case 'firstname':
                return {...acc, [k]:v};
            case 'lastname':
                return {...acc, [k]:v};
            case 'size':
                return {...acc, [k]:v+'cm'};
            case 'weight':
                return {...acc, [k]:v+'kg'};
            default:
                return acc;
        }
    },{})
}

console.log(myFunction({ firstname: 'peter', lastname: 'pan', size: 50, weight: 100, addr: 'abc' }));
// { firstname: 'peter', lastname: 'pan', size: '50cm', weight: '100kg' }
