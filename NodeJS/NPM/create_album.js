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



/*var biz = {name: "Lard Lad Donuts", name_artist_id: 1};
var q = "INSERT INTO album \
  VALUES (default, ${name_artist_id}, ${name})";
db.result(q, biz)
  .then(function (result) {
    console.log(result);
  });
*/


/*
Create Artist

Write a script to create an artist.

$ node create_artist.js
Artist name? Fruit Evanglists
Created artist with ID 5.
*/



var biz = {name_artist: "Bam", address: 1, category: "rock"};
var q = "INSERT INTO artist \
  VALUES (default, ${name_artist}, ${address}, ${category})";
db.result(q, biz)
  .then(function (result) {
    console.log(result);
  });




/*
Create Track

Write a script to create a track.

$ node create_track.js
Track name? I like crunchy soft
Album ID? 2
Track Duration? 5:33
Create track with ID 13.
*/

var biz = {name_alb_id: 4, number_s: 3, review: "great"};
var q = "INSERT INTO track \
  VALUES (default, ${name_alb_id}, ${number_s}, ${review})";
db.result(q, biz)
  .then(function (result) {
    console.log(result);
  });
