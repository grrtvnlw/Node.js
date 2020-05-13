const http = require('http');

let URL = process.argv[2];

http.get(URL, response => {
  response.setEncoding('utf8');

  response.on('error', (error) => {
    console.log(error);
  });

  response.on('data', (data) => {
    console.log(data)
  });
});