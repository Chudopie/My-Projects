const fs = require("fs");

fs.readFileSync("archivo1.txt", "utf-8", (err, data) => {
  if (!err) {
    console.log(data);
  } else {
    console.error("Error: ", err);
  }
});
