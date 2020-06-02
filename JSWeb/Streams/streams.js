// const http = require("http");

// http
//   .createServer((req, res) => {
//     if (req.method === "POST") {
//       let body = "";
//       req.on("data", (data) => {
//         body += data;
//       });

//       req.on("end", () => {
//         console.log(body);
//       });
//       res.end();
//     }
//   })
//   .listen(4000);

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    if (req.method === "POST") {
      const stream = fs.createWriteStream("./bigfile.txt");
      req.on("data", (data) => {
        stream.write(data);
      });

      req.on("end", () => {
        res.end();
      });
    }
  })
  .listen(4000);
