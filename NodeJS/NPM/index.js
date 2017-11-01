

function hello () {
  console.log("this is mike");
}

exports.hello = hello;


/*
1) Use the marked module

Install the marked module, require it, and use the module to convert some hard-coded markdown to HTML,
you may use the example code provided in marked's project page.
*/



//var marked = require('marked');


//console.log(marked('I am using __markdown__.'));



var _ = require('lodash');
var array = [1, 2, 3, 4];

// var deckArray = _.shuffle(array);



// console.log(deckArray);

const cheerio = require('cheerio')
var request = require('request');
request('http://www.npmjs.org ', function (error, response, body) {
  if (error) {console.log('error:', error)}; // Print the error if one occurred}

  var $ = cheerio.load(body, {})
  // console.log($)
  // console.log('data is ', data)
  var packages = []
  $('a').each(function(i, el){
    console.log(i);
    console.log(el.attribs.href.text);
    let link = el.attribs.href
    let splitlink = link.split('/')
    // console.log(splitlink)
    if (splitlink[1] == 'package') {
      if (packages.indexOf(splitlink[2]) < 0)
      packages.push(splitlink[2])
    }
    if (!el) {return false}

  })
  console.log(packages)

});



//const $ = cheerio.load('<h2 class="title">Hello world</h2>')

//console.log($);
