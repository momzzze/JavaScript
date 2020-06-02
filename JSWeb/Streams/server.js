const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  const stream = fs.createReadStream("./bigfile.txt");
  console.log(req.url);
  stream.pipe(res);
});

server.listen(5000)