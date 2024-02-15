let a = 5;

if (a >= 10) {
  //undefined, null , asignacion
  console.log("a es mayor o igual a 10");
} else {
  console.log("A es menor a 10");
}
// console.log("fin de programa");

const hoy = new Date(); //{}
let dia = hoy.getDay(); //0: Domingo, 1: lunes, 2: martes...

console.log({ dia });

console.log(dia);

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("lunes");

  //   if (dia === 1) {
  //     console.log("lunes");
  //   } else {
  //     console.log("No es lunes ni domingo");
  //   }
} else if (dia === 2) {
  console.log("Martes");
} else {
  console.log("No es lunes, martes o domingo");
}

//sin usar If Else, o Switch, unicamente objetos
dia = 6; //primer dia 0=domingo, sabado =6;
//dia de la semana

const diaLetras = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
};
console.log(diaLetras[dia] || "Dia no valido");

const diaLetras2 = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
console.log(diaLetras2[dia]);
