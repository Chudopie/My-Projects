const http = require("http");

const servidor = http.createServer((req, res) => {
  res.end("Estoy aprendiendo Node.js en el port 3000");
});

const PORT = 3000;

servidor.listen(PORT, () => {
  console.log(`El servido esta escuchando en el puerto ${PORT}`);
});
