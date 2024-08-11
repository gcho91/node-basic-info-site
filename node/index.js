const http = require("http");
const fs = require("fs");
const port = 3000;
const path = require("path");

http
  .createServer((req, res) => {
    let filePath = "";
    if (req.url === "/") {
      filePath = "index.html";
    } else if (req.url === "/about") {
      filePath = "about.html";
    } else if (req.url === "/contact-me") {
      filePath = "contact-me.html";
    } else {
      filePath = "404.html";
    }

    fs.readFile(path.join(__dirname, "views", filePath), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("500 Internal Server Error");
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(port, () => {
    console.log(`Node server is listening on port ${port}!`);
  });
