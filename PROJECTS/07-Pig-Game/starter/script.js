'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generating a random dice roll
  //2. Display Dice
  //3. Check for rolled 1: if true, switch to next player
});
//comentario otravez 1234