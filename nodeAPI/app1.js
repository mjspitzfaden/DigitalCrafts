/*
AJAX and API Exercises

AJAX Service

Choose one API service, either:

http://openweathermap.org/current, https://www.themoviedb.org, or https://darksky.net/dev/

Sign up and acquire an API key.
Use Postman to make requests to an API to call the API in question.
Create a page with a form which will allow the user to query that service for either the current weather condition or to search movies given a query term, and then display the results on the page.

API Exercise

Write an API for your AJAX exercise. The API should take the requests you were making on the frontend and request them on the backend. Cache the responses so you don't use up your free API quota. Change your frontend to use your API instead of using the API's directly.

*/



var express = require('express');
const bodyParser = require('body-parser')
const Promise = require('bluebird');
var pgp = require('promise-pg');
var session = require('express-session');
const axios = require('axios');
var app = express();


var APIKEY = 'c8b0d1c9bbed3bd8975048f2f3f5b019';
var city_local = 'lafayette';

var api_url = "api.openweathermap.org/data/2.5/weather?q={$1}&APPID={$2}", city_local, APIKEY;
/*
var config = {
  params: {
    brewed_before: "11-2012",
    abv_gt: 6
  }
};
axios.get(api_url)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
*/

  var request = require("request");

  var options = { method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather',
    qs: { q: 'lafayette', APPID: 'c8b0d1c9bbed3bd8975048f2f3f5b019' },
    headers:
     { 'postman-token': '64f4155a-64d2-a2a7-8346-59cdcc436fec',
       'cache-control': 'no-cache' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

/*
  axios.get(options.url, options.qs)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
*/
    var apicache = require('apicache');
    var cache = apicache.middleware;
    app.get('/', cache('5 minutes'), function (req, res) {
      request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
      console.log('Generating a new response');
      res.json(
        {message: body});
              });
    });





/*var fetch = require('node-fetch');
var myHeaders = require('form-data')
var myHeaders = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": content.length.toString(),
  "X-Custom-Header": "ProcessThisImmediately",
});
var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
fetch(api_url, myInit)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });*/






/*

var config = {
  params: {
    brewed_before: "11-2012",
    abv_gt: 6
  }
};
axios.get(api_url, config)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
*/


app.get('/', function (request, response) {
  response.render('weather.hbs');

});





var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log('Listening on port 8000');
});
