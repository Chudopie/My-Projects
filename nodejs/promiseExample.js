const http = require("https://google.com");

let fetchAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (url === "https://google.com") {
      resolve("funciona");
    } else {
      reject("esta url no es valida");
    }
  }, 4000);
});

function setLoader(bool) {
  if (bool) {
    return "loading ....";
  }
  return "(ocultando el loader)";
}

console.log(setLoader(true));

fetchAPI
  .then((res) => {
    console.log(setLoader(false));
    console.log("Respuesta", res);
    //imprimir todo en mi front end
  })
  .catch((err) => {
    console.log(setLoader(false));
    console.error("Algo ocurrio: ", err);
  });
//56:08 https://www.youtube.com/watch?v=k-6S0M2wtiY
