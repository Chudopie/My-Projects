"use strict";
//Todo de los pokemons
const urlbulbasaur = "http://localhost:3000/getpokemonsbulbasaur";
fetch(urlbulbasaur)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    const bloque = document.getElementById("datosbulbasaur");
    bloque.innerHTML = JSON.stringify(res);
  })
  .catch((err) => {
    console.error(err);
  });

//nombres de pokemons
//bulbasaur
const url = "http://localhost:3000/getpokemons";
fetch(url)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    const bloque = document.getElementById("datos");
    bloque.innerHTML = JSON.stringify(res);
  })
  .catch((err) => {
    console.error(err);
  });
//Ivysaur
const url1 = "http://localhost:3000/getpokemons1";
fetch(url1)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    const bloque = document.getElementById("datos1");
    bloque.innerHTML = JSON.stringify(res);
  })
  .catch((err) => {
    console.error(err);
  });

///////////////////////////////////////////////////

const modal = document.querySelector(".modal");
console.log(modal);
const overlay = document.querySelector(".overlay");
console.log(overlay);
const btnCloseModal = document.querySelector(".close-modal");
console.log(btnCloseModal);
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnCloseModal);

const openModal = function () {
  console.log("button Clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

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
