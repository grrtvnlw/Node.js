const request = require('request');
const gm = require('gm');
const fs = require('fs');
let options = {
  url: `https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png`,
  encoding: null
}
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

request(options, (err, response, imageData) => {
  if (err) {
    console.log("major catastrophe");
  } else {  
    console.log(response);
    readline.question("Output file: ", (outputFile) => {
      fs.writeFile(outputFile, imageData, (err) => {
        if (err) {
          console.log(`${outputFile} this path does not exist.`);
        } else {
          console.log(`Image has been saved to ${outputFile}`)
          gm(`/Users/gerritvanleeuwen/DigitalCrafts/Node.js/node-101/${outputFile}`)
          .resizeExact(240, 240)
          .write(`/Users/gerritvanleeuwen/DigitalCrafts/Node.js/node-101/resize.png`, (err) => {
            if (err) {
              console.log(`Path does not exist.`);
            } else {
              console.log(`Image has been resized at ./resize.png`)
            };
          });
        };
      });
    });
  };
});