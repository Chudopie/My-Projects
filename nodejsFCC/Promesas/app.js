//Promesas  (Objeto de javascript) este objeto es una callbackfunction
//
//Tres estados de promesas
//-> Pending
//-> cumplida o  --> Rechazada

//dos funciones F ---> h
//metodo .then()exito o error

const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve("Promesa Cumplida!");
    } else {
      reject("Promesa Rechazada...");
    }
  }, 3000);
});

const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};
const manejarPRomesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaCumplida);
