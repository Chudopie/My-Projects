function saludar(nombre) {
  //   console.log("Hola " + nombre);
  return [1, 2];
  console.log("codigodespuesdelreturn");
}

//funcion anonima
const retornoDeSaludar = saludar("fernando", 40, true, "Costa Rica");
console.log(retornoDeSaludar[0], retornoDeSaludar[1]);

// const saludarFlecha = (nombre) => console.log("Hola " + nombre);

// saludarFlecha("Flecha");
// // saludar2("Eduardo");

const sumar = (a, b) => a + b;

const getAleatorio = () => Math.random();
console.log(getAleatorio());
