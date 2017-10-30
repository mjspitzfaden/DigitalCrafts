/*Cat 2 Files

Write a function that takes two input filenames and one output filename.
Read the files and combine the file contents. Write the combined contents to the output file.
Use a promise style to chain the reading and writing together.
*/

var request = require('request');
var fs = require('fs');
function readFirstPage(fileName1) {
  var promise1 = new Promise(function(resolve, reject){
      try {
        fs.readFile(fileName1, function (error, buffer) {
        if (error) {console.log('error:', error)}; // Print the error if one occurred}
        var contents = buffer.toString();
        resolve(contents) //body gets returned promise1
        })
      } catch (error) {
        reject(error)
      };
   });
  return promise1;
  }

  var request = require('request');
  var fs = require('fs');
  function readSecondPage(fileName2) {
    var promise2 = new Promise(function(resolve, reject){
        try {
          fs.readFile(fileName2, function (error, buffer) {
          if (error) {console.log('error:', error)}; // Print the error if one occurred}
          var contents1 = buffer.toString();
          resolve(contents1) //body gets returned promise1
          })
        } catch (error) {
          reject(error)
        };
     });
    return promise2;
    }

var fs = require('fs');

function combineFiles(fileName1, fileName2, fileName3) {
  readFirstPage(fileName1)
    .then(function(response) {
    var contents = response
    readSecondPage(fileName2)
      .then(function(response){
        contents += response
      })
      .then(function(response){
        fs.writeFile(fileName3, contents, function (error) {
            if (error) {
              console.error(error.message);
              return;
            }
            console.log('File Save: ', fileName3);
          })

      })
      .catch(function (error) {
         console.error('readSecondPage error: ', error);
      });
  })
  .catch(function (error) {
     console.error('readFirstPage error:', error);
  });
};


combineFiles("google_download.txt", "test.txt", "cat.txt")
