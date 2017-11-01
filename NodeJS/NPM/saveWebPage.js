
function saveWebPage(url, filename, callback) {
  var request = require('request');
  var fs = require('fs');
  request.get(url, function(err, response, html) {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(filename, html, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  });
}
exports.saveWebPage = saveWebPage;
