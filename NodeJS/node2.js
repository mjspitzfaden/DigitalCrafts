/*DNS lookup

Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out. Example:

$ node dns_lookup.
Domain name: yahoo.com
IP Address: 98.139.183.24
Trigger an error condition by providing an invalid domain. See that the error gets displayed.

Hint: Use require('dns') and dns.lookup.
*/

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter a domain name ", function(answer) {
rl.close();
var dns = require('dns');
dns.lookup(answer, 4, function (err, addr, family) {
    if (err) {
        console.log('Something is Wrong ' + err.message);
        return;
      }
    else{
    console.log('the address is: ' + addr);
    }
    })

});













/*
var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Please enter a file name ", function(answer) {
  console.log("Awesomesauce:", answer);
  rl.close();
  fs.readFile(answer, function (error, buffer) {
    if (error) {
      console.error(error.message);
      return;
    }
    var contents = buffer.toString();
    var caps = contents.toUpperCase();
  console.log(caps)
  });

});
*/
