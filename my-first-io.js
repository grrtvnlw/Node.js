const fs = require('fs');

let inp = process.argv[2];

let file = fs.readFileSync(inp).toString();

let newlineCount = file.split('\n').length - 1;

console.log(newlineCount);