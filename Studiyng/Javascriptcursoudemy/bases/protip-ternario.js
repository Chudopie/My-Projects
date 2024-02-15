const elMayor = (a, b) => (a > b ? a : b);

console.log(elMayor(10, 15));

const tieneMembresia = (miembro) => (miembro ? "2 dollar" : "10 dollar");

console.log(tieneMembresia(true));

const amigo = false;
const amigosArr = [
  "Peter",
  "Tony",
  "Dr. Strange",
  amigo ? "Thor" : "Loki",
  //   (() => "Nick Fury")(), //funcion anonima autoinvocada
  elMayor(10, 15),
];

console.log(amigosArr);

const nota = 70; // A+A B+
const grado =
  nota >= 95
    ? "A+"
    : nota >= 90
    ? "A"
    : nota >= 85
    ? "B+"
    : nota >= 80
    ? "B"
    : nota >= 75
    ? "C+"
    : nota >= 70
    ? "C de panzazo"
    : `F reprobado.`;
console.log(`Tu resultado es ${nota} entonces sacaste ${grado}`);
