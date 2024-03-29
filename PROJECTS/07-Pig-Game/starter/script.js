'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;

  diceEL.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //toggle quita la clase si esta ahi, y si no esta la agrega
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// el score debe de estar fuera de la funcion porque si no cada que
//hacemos click se resetearia a 0 el score

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //playing es true pero si ya no estan jugando y deja de ser true, ya no se podra jugar porque
    //nada pasara cuando sea false

    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; //****me equivoque porque el math lo puse en
    // minuscula y es Math y asi si funciono

    //2. Display Dice

    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    //3. Check for rolled 1: if true,

    if (dice != 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //scores[1] = scores[1] + currentScore;
    //messagetocommit exmaple
    //2. Check if player's score is >=100
    //Finish the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }

    //Switch to the next player
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);
