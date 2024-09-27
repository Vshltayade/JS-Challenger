// The Promise below uses setTimeout to do an asynchronous operation. But, it does not resolve with the result of that operation. Fix the mistake such that the then() handler logs the modified value of the variable data.




// const promise = new Promise(function(resolve) {
//     console.log('Starting task...');
//     let data;
//     setTimeout(function() {
//       data = 100;
      
//     }, 1000);
   
//   });
//   promise.then(function(res) {
//     console.log('Promise fulfilled');
//     console.log(res);
//   });



const promise = new Promise(function(resolve) {
    console.log('Starting task...');
    let data;
    setTimeout(function() {
      data = 100;
      resolve(data);
    }, 1000);
  });
  promise.then(function(res) {
    console.log('Promise fulfilled');
    console.log(res);
  });
   //Starting task...
   //Promise fulfilled
   //100


   