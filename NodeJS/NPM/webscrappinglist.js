/*Web Scraping

Given an array of urls:

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];
Use Promise.all and request-promise to re
*/



var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];



var request = require('request-promise');
var p1 = request(urls[0]);
var p2 = request(urls[1]);
var p3 = request(urls[2]);
var p4 = request(urls[3]);
var p5 = request(urls[4]);

Promise.all([p1, p2, p3, p4, p5])
.then(function (responses) {
    console.log(responses[0]);
    console.log(responses[1]);
    console.log(responses[2]);
    console.log(responses[3]);
    console.log(responses[4]);
  })
.catch(function (error) {
    console.error(error);
  });
