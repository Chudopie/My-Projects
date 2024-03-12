//npm init -y
//npm install express
//parametros de ruta
//parametros query http://localhost:3000/api/cursos/programacion/javascript/intermedio?ordenar=vistas
//Routers
//Routers en distintos archivos

const express = require("express");

const app = express();
//sintaxis de destructuracion {infoCursos}
const { infoCursos } = require("./datos/cursos.js");
//Routers
//a programacion
const routerProgramacion = require("./ROUTERS/programacion.js");
app.use("/api/cursos/programacion", routerProgramacion);
// a matematicas

const routerMatematicas = require("./ROUTERS/matematicas.js");
app.use("/api/cursos/matematicas", routerMatematicas);

//Express primeros pasos

//ROUTING conocido como direccionamiento o enrutamiento
app.get("/", (req, res) => {
  res.send("Mi primer servidor con Express. Cursos 💻");
}); //metodo,ruta

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el puerto: ${PORT}...`);
});

app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});
