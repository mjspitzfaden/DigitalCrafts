/*Bonus Challenge: Resize an image

Write a program to download the JavaScript logo from https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png,
and resize it to the size 240x240. You might use the request module to download the file. Hint:
You will set the encoding option to null for request. Example:

var options = {
  url: 'http://example.com/example.png',
  encoding: null
};
request(options, function(err, response, imageData) {
  // save image data and resize
});
Hint 2: Use a module like sharp to resize the image.
*/


var options = {
  url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
  encoding: null
};
var readline = require('readline');
var request = require('request');
var sharp = require('sharp');
var fs = require('fs');
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

request(options, function(err, response, imageData) {
  // save image data and resize
  sharp(imageData)
    .resize(240, 240)
    .toFile('ouput1.jpg', function(err, info) {
     console.log(info);
     if (err) {
       console.log(err.message);
        return;
     }

    });
//    rl.question("Enter file ", function(filename){
//     rl.close();
//      fs.writeFile('output2.jpg', toBuffer(), function() {
//          if (err) {
//          console.log(err.message);
//            return;
//         }
//         console.log('File Save: ', filename);
//        });
     });
//    });
//});
