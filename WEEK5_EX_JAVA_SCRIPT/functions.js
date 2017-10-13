//1) Even Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.
var a = [1, 2, 3, 4];
function even(num){
  if( num % 2 === 0){
  return num;;
  }
}


var evennum = a.filter(even);
console.log(evennum);


//2) Square the Numbers
//Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].


var a = [1, 2, 3, 4];
function squared (n) {
  return n * n;
}

var doubled = a.map(squared);
console.log(doubled);


/* 3)Write a function which takes an array of city objects like such:

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
as input and returns a new array containing the cities whose temperature is cooler than 70 degrees. */
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function cool_70_city(city){
if (city.temperature < 70){
   console.log(city.name);
   return true;
}
}


//var cool_cities = cities.filter(cool_70_city);
console.log(cities.filter(cool_70_city));


var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
//[1,2,3,4].map( function(item) {
//     alert(item);
//})
//4) Print out 'Good Job, {{name}}!' for each person's name, one on a line.
function printArray(num){
console.log(`${"Good Job,"} ${num}${"!"}`);

}


/*for (var attribute in people) {
  var value = people[attribute];
  console.log(`${"Good Job,"} ${value}${"!"}`);
}*/
var item = 0;
people.map(printArray);


/*5)Sort an array

Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.*/

console.log(people.sort());

//Sort an array, 2

//Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.



function len(a,b){
  if (a.length > b.length) {return 1
  }
  else if (a.length < b.length) {return -1}
  else if ( a.length == b.length) {return 0}
}

console.log(people.sort(len));

/*
The "compare" function must take two arguments, often referred to as a and b. Then you make the compare function return 0, greater than 0, or less than 0, based on these values, a and b.

Return greater than 0 if a is greater than b
Return 0 if a equals b
Return less than 0 if a is less than b
With these three return values, and only two arguments, it is possible to write a compare function that can sort any type of input data type, or complex data structures.

Then, when you call sort(), with your custom compare function, the compare function is called on pairs in your to-be-sorted list, to determine the proper ordering.

Lets walk through a simple example... Suppose you're only sorting some numbers, so we have a very simple compare function:

function compare(a,b) {
    return a - b;
}
Simply subtracting b from a will always return greater than zero if a is larger than b, 0 if they are equal, or less than zero if a is less than b. So it meets the requirements for a compare function.

Now lets suppose this is our list of numbers to sort:

var numbers = [1,5,3.14];
When you call numbers.sort(compare), internally it will actually execute:

compare(1,5);     // Returns -4, a is less than b
compare(1,3.14);  // Return -2.14, a is less than b
compare(5,3.14);  // returns 1.86, a is greater than b
If you've ever done manual sorting or alphabetizing, you've done precisely the same thing, probably without realizing it. Even though you may have dozens or hundreds of items to compare, you're constantly comparing only two numbers (or author's last names, or whatever) at a time. Going through or short list of three numbers again, you'd start by comparing the first two numbers:

Is 1 greater than or less than 5? Less than, so put these two numbers in our list: 1,5
Is 3.14 greater than or less than 1? Greater than, so it goes after 1 in the new list
Is 3.14 greater than or less than 5 in our new list? Less than, so it goes before 5. Our new list is now [1,3.14,5]
Because you can provide your own compare() function, it is possible to sort arbitrarily complex data, not just numbers.*/


/*6 3 times

Given this function:

function call3Times(fun) {
  fun();
  fun();
  fun();
}
Use the call3Times function to print "Hello, world!" 3 times.*/


function call3Times(fun) {
  fun();
  fun();
  fun();
}

var fun = function fun() {console.log("Hello, World!")};


call3Times(fun);


 /*n times

You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

> callNTimes(5, hello)
Hello, world!
Hello, world!
Hello, world!
Hello, world!
Hello, world!
You are allowed to use a loop in the implementation of callNTimes.*/
  console.log("next");

function callNtimes(num, saying){
 if (num--){
  callNtimes(num,saying);
   console.log(`${saying} World!`);
  }
 else{
   return;
 }

}

callNtimes(6, 'hello');

/*Sum an array

Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

> sum([1, 2, 3])
6*/

var array = [1, 2, 3];

function getSum(total, num) {
    return total + num;
}

console.log(array.reduce(getSum));


/*Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

> acronym(['very', 'important', 'person'])
'VIP'
> acronym(['national', 'aeronautics', 'space', 'administration'])
'NASA'*/

/*
REDUCE EXPLAINED
var total = 0;
var numbers = [1, 5, 7, 3, 8, 9];
for ( var i = 0; i < numbers.length; i++ ){
    total += numbers[i];
}*/
console.log("start");
var acronym = ['very', 'important', 'person'];
var acronym = ['national', 'aeronautics', 'space', 'administration']

function act(AllFirstLet, num, index, array){
  return AllFirstLet + array[index].charAt(0);
}

console.log(acronym.reduce(act,""));
