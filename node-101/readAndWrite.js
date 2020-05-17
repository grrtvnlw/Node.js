const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Input file: ", (inputFile) => {
  fs.readFile(inputFile, (err, data) => {
    if (err) {
      console.log(`${inputFile} not found`)
    } else {
      readline.question("Output file: ", (outputFile) => {
        fs.readFile(inputFile, (err, data) => {
          data = data.toString().toUpperCase();
          fs.writeFile(outputFile, data, (err) => {
            if (err) {
              console.log(`${outputFile} this path does not exist.`);
            } else {
              console.log(`Wrote to file ${outputFile}`)
            };
          });
        });
      });
    };
  });
});