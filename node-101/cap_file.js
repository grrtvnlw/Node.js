const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("filename: ", (filename) => {
  fs.readFile(filename, (err, data) => {
    if (err) {
      console.log(`ENOENT: no such file or directory, open '${filename}'`)
    } else {
      fs.readFile(`./${filename}`, (err, data) => {
        console.log(data.toString().toUpperCase());
      });
    }
  });
});
