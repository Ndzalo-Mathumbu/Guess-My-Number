'use strict';
// const questionMark = function () {
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = '20';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// };
// questionMark

const hiddenNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '💭 Guess Something...';
  } else if (guess === hiddenNumber) {
    document.querySelector('.number').textContent = hiddenNumber;
    document.querySelector('h1').style.color = 'rgb(31, 143, 9)';
    document.querySelector('header').style.borderBottom = '7px solid green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = '✅ Correct Number';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > hiddenNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else
      document.querySelector('.message').textContent = '🔻 You Lost The Game';
  } else if (guess < hiddenNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else
      document.querySelector('.message').textContent = '🔻 You Lost The Game';
  }
});

const questionMark = function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('h1').style.color = 'white';
  document.querySelector('header').style.borderBottom = '7px solid white';
};

document.querySelector('.btn.again').addEventListener('click', questionMark);
