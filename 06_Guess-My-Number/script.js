'use strict';

//DOM Manipulation
/*
document.querySelector('.again');
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);
//get from text show .textContent
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//get from input use .value
document.querySelector('.guess').value = 50;
console.log(document.querySelector('.guess').value);
*/

var v = 3.14;
const math = [Math.trunc(v), Math.round(v), Math.floor(v), Math.ceil(v)];
console.log(math);

//STICKY
/*
Math.trunc() cuts away (truncates) the decimal places.
Math.round() rounds towards closest integer number.
Math.floor() rounds towards closest lower integer number. 3.5 -> 3 -3.5 -> -4
Math.ceil() rounds towards closest higher integer number. 3.5 -> 4 -3.5 -> -3
*/

//Math.random * 20 = random number 0-19 with decimal
//Math.trunc cuts away decimal
//+1 = 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  displayScore(score);
});

// Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    //  = '🚫 No Number!';
    displayMessage('🚫 No Number!');

    // When Players WIN
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#06b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Number too high!' : '📉 Number too small!'
      );
      score--;

      // When player score 0 and lost
    } else {
      displayMessage('🤯 You lost the Game!');
      score = 0;
    }
  }

  displayScore(score);
});
