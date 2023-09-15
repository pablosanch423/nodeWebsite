// required modules
const http = require("http");
const fs = require("fs");

const port = 3000; // Server's Port

// reading html files
const index = fs.readFileSync("index.html");
const contact = fs.readFileSync("contact.html");
const menu = fs.readFileSync("menu.html");

// Creating the http server
const server = http.createServer((req, res) => {
  const url = req.url;
  // redirecting pages and images
  if (url === "/") {
    req.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(index);
  } else if (url === "/index.html") {
    req.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(index);
  } else if (url === "/menu.html") {
    req.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(menu);
  } else if (url === "/contact.html") {
    req.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(contact);
  } else if (req.url.match(".jpg")) {
    try {
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/jpg");
      imgLoc = req.url.replace("/", "./");
      image = fs.readFileSync(imgLoc);
      res.end(image);
    } catch {
      res.statusCode = 404;
      res.write("404");
    }
  } else {
    res.statusCode = 404;
    res.write("404");
  }
  res.end();
});

server.listen(port, console.log("server is up!"));
