const frutas = ["mango", "manzana", "pera", "banana", "cereza"];
const frutas2 = ["kiwi", "uva"];
//Foreach solo funciona en arreglos o en lo iterable

frutas.forEach((fruta) => {
  console.log(fruta);
});

//CommonJS Modules
// module.exports = { frutas, frutas2 };

//ECMAScript Modules
export default { frutas, frutas2 };
