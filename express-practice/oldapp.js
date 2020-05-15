const express = require('express');
const data = require("./data");
const app = express();
const port = 5500;

app.get("/cat", (req, res) => res.json(data.filter(animal => animal.type == 'cat')));

app.get("/dog", (req, res) => res.send(data.filter(animal => animal.type == 'dog')));

// app.get("/color", (req, res) => res.send(data.animal.color));

app.get("/:id", (req, res) => res.send(data.filter(animal => animal.id == req.params.id)));

app.get("/", (req, res) => {
  let age = req.query.age;
  let color = req.query.color;
  let a = [];
  if (age) {
    a = data.filter(animal => animal.age == age);
  }
  if (color) {
    a = a.filter(animal => animal.color == color);
  }

  res.json(a);
});

app.listen(port, () => console.log(`listening on port http://127.0.0.1:${port}`));