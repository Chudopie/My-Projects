function crearPersona(nombre, apellido) {
  return {
    nombre,
    apellido,
  };
}

const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona2("Eduardo", "Gonzalez");

console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}
//parametro rest... no puede venir otro argumento a un lado, solo ...
//la otra condicion, para una parametro antes del parametro rest, la edad debe de tener su propio valor independiente
const imprimeArgumentos2 = (edad, ...args) => {
  console.log({ edad, args });
  return args;
};

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  "Eduardo",
  "hola"
);
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona2("Eduardo", "Gonzalez");

console.log({ nuevoApellido });

//destructuracion de argumentos
const tony = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  //   edad: 40,
  trajes: ["Mark I", "Mark V", "HulkBuster"],
};

// const imprimePropiedades = (personaje) => {
//   console.log("nombre", personaje.nombre);
//   console.log("codeName", personaje.codeName);
//   console.log("vivo", personaje.vivo);
//   console.log("edad", personaje.edad);
//   console.log("trajes", personaje.trajes);
// };

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  (edad = edad || 0), console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};
imprimePropiedades(tony);
