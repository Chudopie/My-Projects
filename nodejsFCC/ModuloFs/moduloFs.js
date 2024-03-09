//MODULO FS
//fs File System, sistema de archivos
//contiene funcionalidad muy util para trabajar con el sistema de archivos
/*Operaciones Utiles
Leer\
Modificar
Copiar
Eliminar
Cambiar nombre
*/
//Todos los metodos de este modo son ASincronos,  pero puedes escoger versiones sincronas de estos metodos agregando Sync a sus nombres, para ejecutar ,iniciar y culminar junto con la app.

//ToDO fs.rename()
//Todo fs.renameSync()

const fs = require("fs");

//Leer un archivo
console.log("Antes de leer el archivo");
fs.readFile("index.html", "utf-8", (err, contenido) => {
  if (err) {
    throw err; //con este se corta el programa y ya no correria el consolelog mensaje
    console.log(err);
  }
  console.log(contenido);
});
console.log("Despues de leer el archivo");
//Cambiar el nombre de un archivo

//   console.log("Mensaje...");
//});

fs.rename("index.html", "main.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("Nombre cambiado exitosamente  1");
}); //Cambia el nombre del archivo, cambiaremos index.html
//:0 se cambio el nombre
console.log("Despues de cambiar el nombre");
//2 metodos mas
//Agregar contenido al final de un archivo. (append)

fs.appendFile("index.html", "<p>Hola</p>", (error) => {
  if (error) {
    throw error;
  }
  console.log("Archivo Actualizado 5");
});

console.log("Despues de agregar contenido al final");
//Reemplazar todo el contenido del archivo
//Writefile
fs.writeFile("index.html", "Contenido Nuevo 4", (error) => {
  if (error) {
    throw error;
  }
  console.log("Contenido Reemplazado Exitosamente 3");
});
console.log("Despues de reemplazar el contenido");
// Eliminar archivos

fs.unlink("main.html", (error) => {
  if (error) {
    throw error;
  }
  console.log("Archivo Eliminado  2");
});
console.log("Despues de eliminar el archivo");

//Versiones Syncronas
/////////////////////////////////////////////////////////
const archivo = fs.readFileSync("index.html", "utf-8");
console.log(archivo);
fs.renameSync("index.html", "main.html");
fs.appendFileSync("index.html", "<p>Hola</p>");
fs.writeFileSync("index.html", "Contenido Nuevo 4");
fs.unlinkSync("main.html");
//sync con syncrona hacerlo aparte
