var express = require('express');
var app = express();
var animals = [
  { name: 'cats', favorite: true },
  { name: 'dogs', favorite: true },
  { name: 'tree frogs', favorite: true },
  { name: 'earth worms', favorite: false },
  { name: 'guinea pigs', favorite: true },
];

app.get('/', function (request, response) {
  response.send('Hello World!');
});
app.get('/cats', function (request, response) {
  response.send('Meow');
});
app.get('/dogs', function (request, response) {
  response.send('Woof');
});
app.get('/cats_and_dogs', function (request, response) {
  response.send('Living together');
});
app.get('/greet/Kennedy', function (request, response) {
  response.send('Hello, Kennedy!');
});
app.get('/greet/Jamison', function (request, response) {
  response.send('Hello, Jamison!');
});

app.get('/greet/Manny', function (request, response) {
  response.send('Hello, Manny!');
});
app.get('/year', function (request, response) {
  var name = request.query.name || 32;
  name = 2017 - name;
  var html = "<h2>hello</h2>"
  var context = {title: 'Hello', name: name, body:html};
  response.render('layout.hbs', context);
});
app.get('/greet/Manoush', function (request, response) {
  var name = request.query.name || 32;
  name = 2017 - name;
  var context = {title: 'Hello', name: name};
  response.render('manoush.hbs', context);
});
app.get('/fav_animals', function (request, response) {
  var favorite_animals = [];
  for (var i = 0; i < animals.length; i++){
     if (animals[i]['favorite'] == true){
       favorite_animals.push(animals[i]['name'])
     }
  }
            //console.log(favorite_animals);

  response.render('favorite.hbs', {favorite_animals: animals});
});
app.listen(8000, function () {
  console.log('Listening on port 8000');
});
