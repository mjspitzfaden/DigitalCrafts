/*Chaining

Using request-promise and fs-promise modules build a function called saveWebPage which takes two parameters, url and filename.
The function should chain the two promises together to download the URL and then save the file.


*/
var request = require('request');

function getWebPage(url) {
  var promise1 = new Promise(function(resolve, reject){
      try {
        request(url, function (error, response, body) {
          if (error) {console.log('error:', error)}; // Print the error if one occurred}
          resolve(body) //body gets returned promise1
        })
      } catch (error) {
        reject(error)
      };
   });
  return promise1;
  }

var fs = require('fs');
function savePage(filename, body) {
  var promice2  = new Promise(function(resolve, reject){
  fs.writeFile(filename, body, function (error) {
      if (error) {
        console.error(error.message);
        return;
      }
      console.log('File Save: ', filename);
    });
  });
    return promice2;  // returnes the whole promice
  };


var fs = require('mz/fs')
function saveWebPage(url, filename){
  getWebPage(url)
  .then(function(body) {
    // savePage(filename, body)
fs.exists(__filename).then(function (exists) {
  if (exists) // do something
  savePage(filename, body);
})

  })
  .catch(function (error) {
     console.error(error);
  });
}
saveWebPage('http://www.google.com', "google_download.txt")
