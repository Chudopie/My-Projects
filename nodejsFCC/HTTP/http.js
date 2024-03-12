const http = require("http");
const servidor = http.createServer((req, res) => {
  //PROCESO
  console.log("Solicitud Nueva");
  res.end("Hola mundo");
});
const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(
    `El servidor esta escuchando en el http://http://localhost:${PUERTO} ...`
  );
});
