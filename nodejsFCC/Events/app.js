// const EventEmitter = require("events");
// console.log(EventEmitter);
//EVENTS HANDLERS
//EVENTS

const EventEmitter = require("events");

const emisorProductos = new EventEmitter();

//new crea una nueva instancia de la clase un nuevo objeto para emitir eventos osea el emisor productos, para simular una compra

emisorProductos.on("compra", (total, numProductos) => {
  console.log(
    `Se realizo una compra por $${total} de ${numProductos} Productos`
  );
});
emisorProductos.emit("compra", 500, 4);
