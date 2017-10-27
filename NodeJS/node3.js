/*Write a program to prompt the user for two file names, the first file will be the input and the second file will be the output.
The program will read in the contents of the input file, convert its text to all caps, and then write the resulting contents to the output file.

Example:

$ node cap_file_2.js
Input file: file1.txt
Output file: output.txt
Wrote to file output.txt
As a result, output.txt should now contain the text HELLO, I AM FILE 1.

Trigger an error by running the program with an non-existing input file, ensure that the error is properly displayed.
Trigger an error by running the program with an output file in a non-existant directory, such as thisdirdoesntexist/output.txt,
ensure that the error is properly displayed.
*/


var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter file 1 ", function(filename1){
  rl.question("Enter file 2 ", function(filename2){
    rl.close();

    var fs = require('fs');
    fs.readFile(filename1, function (error, buffer) {
      if (error) {
        console.error(error.message);
        return;
      }
      var contents = buffer.toString();
      fs.writeFile(filename2, contents, function (error) {
        if (error) {
          console.error(error.message);
          return;
        }
        console.log('File Save: ', filename2);
      });
    });
  });
});
