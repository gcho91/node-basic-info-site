const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact-me.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
