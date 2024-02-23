const contenedor = document.getElementById("contenedor");
//INNERHTML STRING

const titulo = document.getElementById("titulo");
console.log(typeof titulo.innerHTML); // lo que tiene el elemento del contenedor del div en formato html y el typeof es string

//OBJETO sin ningun inner devuelve objeto

console.log(typeof contenedor); // lo que tiene el elemento del contenedor del div en formato html y el typeof es objeto

//INNERTEXT
console.log(typeof titulo.innerText); // lo que tiene el elemento del contenedor del div en formato html y el typeof es string

//TAGNAME STRING y te devuelve el H1 o elemento
console.log(titulo.tagName);

//getelementbyclassname
//se puede ingresar al primero de la lista ordenada, con arreglo y al nombre del id con [0].id
const topping = document.getElementsByClassName("topping");
console.log(topping);
console.log(topping[0]);

//.getelementbytagname se busca el elemento por el tagname o su etiqueta por ejemplo el li el elemento que es la lista ordenada
const misToppings = document.getElementsByTagName("li");
console.log(misToppings);
//aqui se selecciona solo los de fondo marron por classname
const toppingsFondoMarron = document.getElementsByClassName("fondo-marron");
console.log(toppingsFondoMarron);
//QUERYSELECTOR
const ullifondonaranja = document.querySelector("ul li.fondo-naranja");
console.log(ullifondonaranja);

const nofondomarron = document.querySelector("ul li:not(.fondo-marron)");
console.log(nofondomarron); //niega las caracteristicas que señalan al elemento que en este caso es una clase de la lista ul, que dentro tiene una li y que niega las clases .fondo-marron y selecciona las que no son .fondo-marron, por el not (en realidad solo selecciona el primer topping que es cebolla y no es marron)

//QUERYSELECTOR ALL
const toppingNaranja = document.querySelectorAll("ul li:not(.fondo-marron)");
console.log(toppingNaranja);
console.log(toppingNaranja[0]);
console.log(toppingNaranja[1]);
console.log(toppingNaranja.length);
console.log(typeof toppingNaranja);

//ASIGNAR ESTILO CON JS
const primerTopping = document.querySelector(".topping");
console.log(primerTopping.style);

primerTopping.style.backgroundColor = "blue";
primerTopping.style.color = "#6dff00";
primerTopping.style.textTransform= "Uppercase"
