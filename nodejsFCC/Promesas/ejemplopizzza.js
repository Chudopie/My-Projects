const { rejects } = require("assert");
const { resolve } = require("path");

const estatusPedido = () => {
  return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve, rejects) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("Pedido exitoso, su pizza esta en camino!");
    } else {
      rejects("Ocurrio un error. Por favor intente nuevamente");
    }
  }, 3000);
});

// const manejarPedido = (mensajeDeConfirmacion) => {
//   console.log(mensajeDeConfirmacion);
// };
// const rechazarPedido = (mensajeDeError) => {
//   console.log(mensajeDeError);
// };

// miPedidoDePizza.then(manejarPedido, rechazarPedido);
//TODO EN UN SOLO BLOQUE LO DE ARRIBA EL RECHAZAR o el CONFIRMAR

miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })
  .then(null, (mensajeDeError) => {
    console.log(mensajeDeError);
  });

//Sin agregar null con CATCH
