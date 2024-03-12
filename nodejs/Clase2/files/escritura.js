const fs = require("fs");

fs.writeFileSync("archivo1.txt", "Hola mundo! \n ", (err) => {
  if (err) {
    console.error("Error al escribir el archivo", err);
  } else {
    console.log("El archivo se creo correctamente");
  }
});

fs.appendFile("archivo1.txt", "Estoy Aprendiendo Node.js", (err) => {
  if (!err) {
    console.log("Contenido fue agregado correctamente");
  } else {
    console.log("Error", err);
  }
});
