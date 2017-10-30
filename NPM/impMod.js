
var SWPModule = require('./saveWebPage.js')
var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';
SWPModule.saveWebPage(url, filename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});
