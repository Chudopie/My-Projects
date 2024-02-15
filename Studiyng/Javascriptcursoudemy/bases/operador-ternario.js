/*
dias de semana abrimos alas 11,
pero los fines de semana abrimos alas 9
*/
//entra a un sitio web, para consultar si esta abierto hoy....

const dia = 1; //0 es domingo etc
const horaActual = 9;

let horaApertura;
let mensaje; //Esta abierto, esta cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6) {
// if ([0, 6].includes(dia)) {
//   console.log("fin de semana");
//   horaApertura = 9;
// } else {
//   console.log("Dia de semana");
//   horaApertura = 11;
// }

horaApertura = [0, 6].includes(dia) ? 9 : 11;

mensaje =
  horaActual >= horaApertura
    ? "Esta abierto"
    : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

// if (horaActual >= horaApertura) {
//   mensaje = "Esta abierto";
// } else {
//   mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura};`;
// }

console.log({ horaApertura, mensaje });
