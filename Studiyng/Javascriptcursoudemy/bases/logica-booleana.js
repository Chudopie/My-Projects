const regresaTrue = () => {
  console.log("regresaTrue");
  return true;
};

const regresaFalse = () => {
  console.log("regresaFalse");
  return false;
};

console.warn("Not o la negacion");
console.log(true); //true
console.log(!true); //true

console.log(!regresaFalse()); //true

console.warn("And"); //True si todos los valores son verdaderos
console.log(true && true); //true
console.log(true && !false); //true

console.log("=========");
console.log(regresaFalse() && regresaTrue()); //false
console.log("=========");
console.log(regresaTrue() && regresaFalse()); //false
console.log("========&&&=");
regresaFalse() && regresaTrue();

console.warn("OR"); //true

console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());
console.log(regresaFalse() && regresaTrue()); //false
console.warn("4 condiciones"); //true
console.log("and", true && true && true && false); //true

console.log("or", false || true || true || false); //true

console.warn("asignaciones");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && "Hola Mundo" && 150;

const a2 = "Hola" && "Mundo" && soyFalso && true;
const a3 = soyFalso || "ya no soy falso";
const a4 =
  soyFalso || soyUndefined || soyNull || " Ya no soy falso de nuevo" || true;

const a5 =
  soyFalso ||
  soyUndefined ||
  regresaTrue() ||
  " Ya no soy falso de nuevo" ||
  true;

console.log({ a5 });

if (false || true || true || false) {
  console.log("hacer algo");
} else {
  console.log("hacer otra cosa");
}
