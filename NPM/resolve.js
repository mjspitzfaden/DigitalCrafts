/*Resolve, Reject

Write a promise that adds two numbers and resolves the answer. However, if the two inputs provided are not both numbers reject the
promise. The API should work like the following:

addNumbers(x, y)
  .then(function (answer) {
    console.log(answer);
  })
  .catch(function (error) {
    console.log(error);
  });

  */

  function addNumbers(x, y)
     {
    var promise1 = new Promise(function(resolve, reject){
      try{

            if (typeof x !== 'number' || y !== 'number')
            {
             throw error = "ERROR"
              reject(error)
            }
            resolve (x + y)
         }
            catch (error)
          {
           reject(error)
          };
      });

    return promise1
    }

      addNumbers(1,2)
        .then(function(response) { })


        .catch(function (error) {
           console.error('readSecondPage error: ', error);
        })




//console.log(addNumbers(1,2));
