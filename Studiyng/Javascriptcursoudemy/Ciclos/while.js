const carros = ["Ford", "Mazda", "Honda", "Toyota"];

let i = 0;

// while (i < carros.length) {
//   console.log(carros[i]);
//   i++; //i=i+1
// }

//undefined es falso, null y false.
console.warn("While");
while (carros[i]) {
  if (i === 1) {
    i++;
    continue;
  }
  console.log(carros[i]);
  i++; //i=i+1
}

console.warn("Do while");
//dowhile usa el bloque interno una vez

j = 0;
do {
  console.log(carros[j]);
  j++;
} while (carros[j]);
