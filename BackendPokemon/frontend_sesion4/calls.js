"use strict";
const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

const btnCloseModal = document.querySelector(".close-modal");

const btnsOpenModal = document.querySelectorAll(".show-modal");

// //posible audio
// document
// .getElementsByClassName("show-modal")
// .addEventListener("click", function () {
//   let audio = document.getElementsByClassName("audio-pokemon");
//   if (audio.paused) {
//     audio.play();
//     this.textcontent = "pausar musica";
//   } else {
//     this.textcontent = "reproducir musica";
//   }
// });

function openModal(event, id) {
  console.log("button Clicked");

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  callPokemonById(id);
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//Todo de los pokemons

//nombres de pokemons
let audio = document.getElementById("audio-pokemon");

for (let i = 0; i < 151; i++) {
  const buttonpoke = document.createElement("button");

  buttonpoke.classList.add("show-modal");

  //   buttonpoke.innerHTML = `${i}`;
  document.body.appendChild(buttonpoke);
  buttonpoke.addEventListener("click", (event) => {
    openModal(event, i + 1);
    audio.play();
  });
}

let pokenamesids = [];

const urlpokemonsnames = "http://localhost:3000/getpokemonsnames";
fetch(urlpokemonsnames)
  .then((res) => res.json())
  .then((res) => {
    pokenamesids = res;
    pintarBotones(res);
  })
  .catch((err) => {
    console.error(err);
  });

function pintarBotones(nombres) {
  for (let i = 0; i < 151; i++) {
    // buttonpoke.innerHTML = `${nombres[i]}`;
    const buttonpoke = document.querySelector(".show-modal");
    document.body.appendChild(buttonpoke);
    buttonpoke.innerHTML = `${nombres[i].pokename} <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png" alt="pokes" width="10" height="10">`;
  }
  console.log();
}

//todos los id
function callPokemonById(id) {
  const url = `http://localhost:3000/getpokemons/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const debilidades = res[0].debilidad.split("/");
      const container = document.querySelector(".modal-body");
      container.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt=""/> <hr> <br> <b>Nombre</b>: ${res[0].pokename} <br> <b>Tipo : </b> ${res[0].poketype} <br>  <b>Poder 1: </b> ${res[0].pokepower1} <br>  <b>Poder 2: </b> ${res[0].pokepower2}  <br>  <b>Ataque: </b> ${res[0].ataque}  <br>  <b>Defensa: </b> ${res[0].defensa}  <br>  <b>Vida: </b> ${res[0].vida}  <br>  <b>Velocidad: </b> ${res[0].velocidad}  <br>  <b>Tipo de Debilidad: </b> ${debilidades}<br>  <b>Numero de Evolucion: </b> ${res[0].evolucion}`;
    })
    //hacer badges para el tipo de pokemons hacer lo mismo con debilidades y con las debilidades aplicarle badges de bootstrap

    .catch((err) => {
      console.error(err);
    });
}

///////////////////////////////////////////////////

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//KEYBOARD EVENT

document.addEventListener("keydown", function (e) {
  //   console.log(e.key); "Escape"

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
