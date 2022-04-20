'use strict';

const displayMessage = (message) =>
  (document.querySelector('.message').textContent = message);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  let highScore = Number(document.querySelector('.highscore').textContent);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess || guess < 1 || guess > 20) {
    displayMessage('🛑 Please guess a number between 1 & 20!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score > 0 && guess !== secretNumber) {
    displayMessage(guess < secretNumber ? '📉 Too low!' : '🔺 Too high!');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('☠️ Game Over!');
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
