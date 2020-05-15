const express = require('express');
const app = express();
const PORT = 5500;

app.get("/", (req, res) => res.send(`
  <h1>This is an inspiring message!</h1>
  <a href="/legal">Legal</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
`));
app.get("/legal", (req, res) => res.send(`
<h1>Legal</h1>
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/contact">Contact</a>
`));
app.get("/about", (req, res) => res.send(`
<h1>About</h1>
<a href="/">Home</a>
<a href="/legal">Legal</a>
<a href="/contact">Contact</a>
`));
app.get("/contact", (req, res) => res.send(`
<h1>Contact</h1>
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/legal">Legal</a>
`));

app.listen(PORT, () => console.log(`listening on http://127.0.0.1:${PORT}`));