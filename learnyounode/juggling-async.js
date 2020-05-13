const http = require('http');
const bl = require('bl');

let results = [];
let count = 

for (var i = 2; i < process.argv.length; i++) {
  URL.push(process.argv[i]);
}

function parseURL(url, callback) {
  let result = '';

  http.get(url, function (result) {
    result.setEncoding('utf8');

    result.on('data', function (data) {
      result += data;
    })

    result.on('end', function () {
      console.log('result')
      callback();
    });
  });
}

parseURL(URL[0], function () {
  parseURL(URL[1], function () {
    parseURL(URL[2], function () {
      //end 
    });
  });
});