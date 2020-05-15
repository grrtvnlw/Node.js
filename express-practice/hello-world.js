const express = require('express');
const app = express();
const PORT = 3000;

function logQuery(req, res, next) {
  if (req.query) {
    console.log(req.query);
    next();
  }
}

app.use(express.static('public'));

app.use('/hello1', logQuery)

app.get("/", (req, res) => res.send("Hello, world!"));
app.get("/cats", (req, res) => res.send("Meow"));
app.get("/dogs", (req, res) => res.send("Woof"));
app.get("/cats_and_dogs", (req, res) => res.send("Living together"));
app.get("/greet/:name", (req, res) => res.send(`Hello, ${req.params.name}!`));
app.get("/hello1", (req, res) => {
  let name = req.query.name || "world";
  let date = new Date()
  let age = req.query.age;
  let ageString = age ? `You were born in ${date.getFullYear() - age}!` : '';
  // if (age == true) {
  //   ageString = `You were born in ${2020 - age}!`;
  // } else {
  //   ageString = '';
  // }
  res.send(`Hello ${name}! ${ageString}`);
});

app.listen(PORT, () => console.log(`listening on http://127.0.0.1:${PORT}`));