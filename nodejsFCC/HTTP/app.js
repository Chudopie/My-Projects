const http = require("http");

const servidor = http.createServer((req, res) => {
  console.log("===> req (respeusta)");
  console.log(res.statusCode); //200 ok
  //   res.statusCode = 404;
  //   console.log(res.statusCode); //404 not found
  //   console.log(req.url);
  //   console.log(req.method);
  //   console.log(req.headers);

  res.setHeader("content-type", "application/json");
  console.log(res.getHeaders());
  res.end("Hola Mundo");
});

const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
//5:10:09 URL
