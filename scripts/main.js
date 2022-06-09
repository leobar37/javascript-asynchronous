const fs = require("fs");

fs.writeFile("test.txt", "Hello World", (err) => {
  if (!err) {
    console.log("File created");
  }
});

console.log("hola 1");

const result = fs.readFile("test.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log("exist result");
  }
});

console.log(`Result: ${result}`);
