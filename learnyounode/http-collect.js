const http = require('http');
const bl = require('bl');

let URL = process.argv[2];

http.get(URL, response => {
  response.pipe(bl(function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(data.length);
    console.log(data.toString())
  }));
});