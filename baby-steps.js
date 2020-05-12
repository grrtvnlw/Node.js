let counter = 0;
for (let i = 2; i < process.argv.length; i++) {
  counter += Number(process.argv[i]);
}

console.log(counter);