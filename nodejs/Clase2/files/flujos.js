const fs = require("fs");

const readStream = fs.createReadStream("./archivo1.txt");
console.log(readStream);
readStream.on("data", (chunk) => {
  console.log(chunk.length + "bytes de datos");
});

console.log("kdkdkdk");
