const fs = require("fs");

const readStream = fs.createReadStream("./blog3.txt");

readStream.on("data", (chunk) => {
  console.log("newchunk---------");
  console.log("  ");

  console.log(chunk.toString());
});
