const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const dns = require('dns');

readline.question("Domain name: ", (domainName) => {
  dns.resolve4(domainName, (err, address) => {
    if (err) {
      console.log("Invalid domain name.");
    } else {
      console.log(`IP Address: ${address}`);
    }
  })
});