/*Function Rewrites

Rewrite the following normal functions into callback functions.

function add(x, y) {
  var result = x + y;
  return result;
}

function subtract(x, y) {
  return x - y;
}

function greeting(person) {
  return 'Hola, ' + person + '!';
}

function product(numbers) {
  return numbers.reduce(function(a, b) {
    return a * b;
  }, 1);
}
*/

function add (x, y, callback) {
  setTimeout(function () {
    var result = x + y;
    callback(result);
  }, 5000);
}

function subtract (x, y, number){
  var answer = x - y;
  number(answer);
}
class Person {
  constructor (name) {
  this.name = name;
  }

}
function greeting (person, callback){
  var gre = 'Hola, ' + person.name + '!';
  callback(gre);
}

function product (numbers, callback){

  callback(numbers.reduce(function(a, b, answer){
    var answer a * b;
  }))
}

add(4, 6, function (result) { console.log(result); });
console.log("hey");
console.log("one");
subtract (2, 1, function (answer) {
  console.log(answer);
})
console.log("two");
Bob = new Person();
Bob.name = "Bob";
greeting(Bob, function (gre) { console.log(gre);});
