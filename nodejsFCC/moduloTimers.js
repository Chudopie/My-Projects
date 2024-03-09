//Timer, Temporizador
//Funciones que ejecutan codigo luego de un cierto periodo de tiempo
//setTimeout()
//setImmediate()
// setInterval()

//1seg = 1000 milisegundos
///////////////////////////////////////////////////////////////////
// setTimeout(funcion,retraso,argumento1,argumento2)

function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

// mostratTema("Node.js");
//higher order programing
setTimeout(mostrarTema, 2000, "Node.js");

function sumar(a, b) {
  console.log(a + b);
}

setTimeout(sumar, 3000, 5, 6);
////////////////////////////////////////////////////////////////
// setImmediate(funcion,argumento1,argumento2)
console.log("Antes de setInmmediate");
setImmediate(mostrarTema, "Node.js2");
console.log("Despues de setInmmediate");

//////////////////////////////////////////////////////////////////
// setInterval(funcion,intervalo,arg1,arg2);

setInterval(mostrarTema, 3000, "Node.js3");

setInterval(sumar, 4000, 1, 2);
