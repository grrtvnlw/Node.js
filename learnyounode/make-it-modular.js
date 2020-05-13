const filterFileNames = require('./mymodule');

let name = process.argv[2];
let ext = process.argv[3];

filterFileNames(name, ext, (err, data) => {
  if (err) {
    console.log('Error: ', err);
    return;
  }

  data.forEach(filename => {
    console.log(filename);
  });
});