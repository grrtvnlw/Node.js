const fs = require('fs');
const path = require('path');

function filterFileNames(dirName, ext, callback) {
  fs.readdir(dirName, (err, list) => {
    if (err) {
      callback(err);
      return;
    }

    const filteredList = list.filter(file => {
      let pathName = path.extname(file).slice(1);
      if (pathName === ext) {
        return true;
      } else {
        return false;
      }
    });

    callback(null, filteredList);
  });
}

module.exports = filterFileNames;