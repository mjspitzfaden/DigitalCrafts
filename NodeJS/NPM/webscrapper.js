/*Web Scraper

This is a freeform web scraping project. You will use request and cheerio to scrape a web site for information.
Some ideas:

Get information about countries, plants, animals from Wikipedia.
Get information about programming languages from Wikipedia.
Get information about Pokemon from...somewhere on the internet.
The end result of your project is a publish npm module, with which people can get information for a given thing or topic.
For example, maybe they can get information about any programming language with this code:

var programmingLanguages = require('programming-languages');
programmingLanguages.getInfo('JavaScript', function(err, info) {
  console.log(info); // And info will be an object containing various
                     // info on JavaScript on Wikipedia
});
You will design the API (application programming interface) - which is just a fancy word for how people will use your module.
You will write a README file for your module, which will teach them how to use it.
*/


// console.log(deckArray);

const cheerio = require('cheerio');
var request = require('request');
request('http://www.wikipedia.org ', function (error, response, body) {
  if (error) {console.log('error:', error)}; // Print the error if one occurred}

  var $ = cheerio.load(body);
  console.log(body)

  });
