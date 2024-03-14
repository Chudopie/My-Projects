const http = require("http");
const url = require("url");
const servidor = http.createServer((req, res) => {
  console.log("===> req (respuesta)");
  const path = url.parse(req.url, false).pathname;

  if (req.method === "GET") {
    switch (path) {
      case "/salones":
        res.write("Aca estan todos los salones");
        break;
      case "/alumnos":
        res.write("Aca estan todos los alumnos");
        break;

      default:
        res.write("Ruta no encontrada");
        break;
    }
    res.end("");
  }

  console.log(res.statusCode); //200 ok
  console.log(path === "/user");
  res.end("Hola Mundo");
});

const PORT = 3000;
servidor.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el puerto ${PORT}...`);
});
