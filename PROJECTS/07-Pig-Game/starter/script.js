'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentEl0 = document.getElementById('current--0')
const currentEl1 = document.getElementById('current--1')
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');

let currentScore =0;
// el score debe de estar fuera de la funcion porque si no cada que
//hacemos click se resetearia a 0 el score  

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random()*6) +1;//****me equivoque porque el math lo puse en
  // minuscula y es Math y asi si funciono

  
  console.log(dice);
  //2. Display Dice

  diceEL.classList.remove('hidden')
  diceEL.src=`dice-${dice}.png`;
  //3. Check for rolled 1: if true,

  if (dice != 1) {
    //add dice to current score
    currentScore  += dice;
    currentEl0.textContent=currentScore;//change later
  }else {
    
    //switch to next player
  }
});

