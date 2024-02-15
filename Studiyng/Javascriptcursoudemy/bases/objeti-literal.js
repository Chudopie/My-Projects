const personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "HulkBuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima-pelicula": "infinity War",
};

console.log("Nombre: ", personaje.nombre);
console.log("Nombre:", personaje["nombre"]);
console.log("Edad: ", personaje.edad);
console.log("Lat: ", personaje.coords.lat);
console.log("No. Trajes: ", personaje.trajes.length);
console.log("ultimo traje: ", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";

console.log("Vivo", personaje[x]);

console.log("Ultima pelicula: ", personaje["ultima-pelicula"]);
//mas detalles

delete personaje.edad;

console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// personaje = true; no se puede cambiar la constante directa al personaje

Object.freeze(personaje); //ya no se pueden hacer cambios al objeto con freeze. pero no congela a los objetos dentro del objeto

personaje.dinero = 161651651651;
personaje.casado = false;
Object.freeze(personaje.direccion); //pero podemos congelar directamente a los objetos dentro de los objetos de esta manera
personaje.direccion.ubicacion = "Costa Rica";
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades, valores });
