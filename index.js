// Create your node.js server file index.js and add the code needed to serve the right page according to the url.
// localhost:8080 should take users to index.html
// localhost:8080/about should take users to about.html
// localhost:8080/contact-me should take users to contact-me.html
// 404.html should display any time the user tries to go to a page not listed above.

// set up routes to serve static text for each route

const http = require("http");
const port = 3000;

const fs = require("fs");

http
  .createServer((req, res) => {
    // route handling logic

    console.log("requested url here:", req);
    if (req.url === "/") {
      res.write("welcome to basic site index.html");
      res.end();
      // send static file
    } else if (req.url === "/about-me") {
      res.write("about me!");
      res.end();
    } else if (req.url === "/contact-me") {
      res.write("contact me!");
      res.end();
    } else {
      res.write("404 not found");
      res.end();
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}?!`);
  });
