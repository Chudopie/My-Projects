const http = require("http");
const PORT = 3001;

console.log(http);
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if
    res.end("Hello win world!");
  } else {
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});
