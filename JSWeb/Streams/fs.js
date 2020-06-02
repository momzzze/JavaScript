const fs = require("fs");
console.log("first console");
//sync method
//let dataSync = fs.readFileSync("./bigfile.txt", "utf8");
//console.log(dataSync);

let data = fs.readFile("./bigfile.txt", "utf8", (err, data) => {
  console.log(data);
});

// fs.mkdir("new-folder", (err) => {
//   console.log(err);
// });

// fs.rename("./secondNew", "./new-folder", (err) => {
//   console.log(err);
// });

// fs.writeFile("./file.txt", "NewFILEEE", (err) => {
//   console.log(err);
// });

fs.unlink("./new-file.txt", (err) => {
  console.log(err);
});

console.log("secondconsole");
