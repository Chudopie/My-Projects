const http = require("http");

const PORT = 3001;
console.log(http);

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    console.log(req);
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<h1>Welcome to NodeJS from server!</h1>
      <form>
       <label>Username</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="password">
      </form>`);
    } else if (req.method === "POST") {
      if (req.url === "/") {
        let bodyStr = "";
        req.on("data", (chunk) => {
          bodyStr += chunk.toSring();
        });

        req.on("end", () => {
          let bodyObj = JSON.parse(bodyStr);

          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(`<h1>Bienvenido ${bodyObj.username}</h1>`);
        });
      }
    }
  } else {
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
