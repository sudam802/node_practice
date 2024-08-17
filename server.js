const http = require("http");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Contnet-type", "text/plain");
  res.write("Hello amigos");
  res.end();
});

server.listen(3000, "localhost", () => {});
console.log("listing ot the request");
