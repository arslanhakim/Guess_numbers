'use strict';

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let Score = 20;
let hightscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when no input
  if (!guess) {
    displayMessage('⛔ No Number!');
  }
  //when number is correct
  else if (guess === SecretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (Score > hightscore) {
      hightscore = Score;
      document.querySelector('.highscore').textContent = hightscore;
    }
  } else if (Score > 1) {
    //when number is not equal to secret numnber

    displayMessage(guess > SecretNumber ? '📈 Too High!' : '📉 Too Low!');
    Score--;
    document.querySelector('.score').textContent = Score;
  } else {
    displayMessage('🎇 You Lost The Game');
    Score = 0;
    document.querySelector('.score').textContent = Score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  Score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
