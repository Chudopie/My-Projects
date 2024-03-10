//encadenar promesas

//
function ordenarProducto(producto) {
  return new Promise((resolve, rejects) => {
    console.log(`Ordenando: ${producto} de freeCodeCamp.`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("Ordenando una taza con el logo de freeCodeCamp...");
      } else {
        rejects("Este producto no esta disponible actualmente.");
      }
    }, 2000);
  });
  //crear promesa dentro de la funcion y la retornas asi el programa espera que el programa se acomplete al momento de llamar a la funcion
}

function procesarPedido(respuesta) {
  return new Promise((resolve) => {
    console.log("Procesando respuesta...");
    console.log(`La respuesta fue: "${respuesta}" `);
    setTimeout(() => {
      resolve("Gracias por tu compra. Disfruta tu producto de freeCodeCamp.");
    }, 4000);
  });
}

//Encadenando promesas
// ordenarProducto("taza")
//   .then((respuesta) => {
//     console.log("Respuesta Recibida");
//     console.log(respuesta);
//     return procesarPedido(respuesta);
//   })
//   .then((respuestaProcesada) => {
//     console.log(respuestaProcesada);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Async await codigo sincrono como si fuera asyncrono
//ESTO que sigue es en vez de encadenar la promesa como arriba, con async await
//await siempre se usa con async
async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log("Respuesta recibida");
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido("taza");
//4:09:15 https://www.youtube.com/watch?v=1hpc70_OoAg
