/*Create album

Write a script to create a new album in the database. You may either connect to your local database or your remote database.
The script will prompt the user for an album name, a year, and an artist ID.
You may use the prompt-promise module to get user prompts in the promise style - with this everything can be written in one straight chain.
 Be sure to sanitize your inputs!

Example session:

$ node create_album.js
Album name? The Squeezed Apple
Album year? 1998
Artist ID? 4
Created album with ID 2.
*/
var pgp = require('pg-promise')({
  // initialization options
});
var db = pgp({database: 'music'});

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the name ", function(name){
  rl.question("Enter artist id", function(name_artist_id){
    rl.close();
    var biz = {'name': name, 'name_artist_id': name_artist_id}
    //var biz = {name: "Lard Lad Donuts", name_artist_id: 1};
    var q = "INSERT INTO album \
      VALUES (default, ${name_artist_id}, ${name})";
    db.result(q, biz)
      .then(function (result) {
        console.log(result);
      });
      pgp.end()
  })
}, 5000);
