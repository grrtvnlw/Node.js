const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const request = require('request');
let htmldata = '';

readline.question("URL: ", (inputURL) => {
  request(`${inputURL}`, (err, response, body) => {
    if (err) {
      console.log(`${inputURL} is not a valid URL.`)
    }  else {
      htmlData = body;
      readline.question("Save to file: ", (outputFile) => {
        fs.writeFile(outputFile, htmlData, (err) => {
          if (err) {
            console.log(`${outputFile} this path does not exist.`);
          } else {
            console.log(`Saved to file ${outputFile}`)
          };
        });
      });
    }
  });
});