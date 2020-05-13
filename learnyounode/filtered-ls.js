const fs = require('fs');
const path = require('path');

let fileName = process.argv[2];
let fileExt = process.argv[3];

fs.readdir(fileName, (err, list) => {
  list.forEach(item => {
    let pathName = path.extname(item).slice(1);
    if (pathName === fileExt) {
      console.log(item);
    }
  })
})