const fs = require('fs');

let inp = process.argv[2];

fs.readFile(inp, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.split('\n').length - 1);
  }
});