'use strict';

//Selecting Element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting Condition
const init = function () {
  //Array to save player score
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  //Starting condition
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // delete css to first one
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
};

init();

//function to get currentPlayer
const currentPlayer = function (scr) {
  document.getElementById(`current--${activePlayer}`).textContent = scr;
};

//function to toggle css active player
const switchPlayer = function () {
  currentScore = 0;
  currentPlayer(currentScore);
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check for rolled 1
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      currentPlayer(currentScore);
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

//Hold function
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current player Score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if player score >= 100
    // Finish Game

    if (scores[activePlayer] >= 10) {
      diceEl.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //   Swich to Next Player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
