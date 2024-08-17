const fs = require("fs");

// reading file
fs.readFile("./blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
// write files
fs.writeFile("./blog1.txt", "hello amigos", () => {
  console.log("file was written");
});
