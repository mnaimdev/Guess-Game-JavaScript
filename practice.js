// Guess Number
const number = document.querySelector('.number');
const againBtn = document.querySelector('.again');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const labelScore = document.querySelector('.label-score');
const highScore = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

labelScore.textContent = '💯 Score:' + score;



function displayMessage(msg) {
    message.textContent = msg;
}

function displayScore() {
    labelScore.textContent = '💯 Score:' +  score;
}

checkBtn.addEventListener('click', function () {
    let guessValue = Number(guess.value);

    // no number
    if (!guessValue) {
        message.textContent = 'No number';
    }

    // when correct
    else if (guessValue === secretNumber) {

        displayMessage('❤️ Correct number');
        document.body.style.backgroundColor = 'tomato';
        guess.disabled = true;
        checkBtn.style.display = 'none';

        if (score < 20) {
            score++;
            displayScore();
        }

        if (score > highscore) {
            highScore.textContent = score;
        }
    }

    // when wrong
    else if (guessValue !== secretNumber) {
        displayMessage(guessValue > secretNumber ? '🔥 Too High': '🥴 Too Low');
        document.body.style.backgroundColor = 'gray';

        if (score > 1) {
            score--;
            displayScore();
        } else {
            displayMessage('🙂 You have lost');
            labelScore.textContent = '💯 Score:' +  0;
        }
    }
 
});


againBtn.addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    displayMessage('Start guessing...');

    labelScore.textContent = '💯 Score:' +  20;
    
    guess.value = '';
    number.textContent = '?';
    document.body.style.backgroundColor = '#222';

    guess.disabled = false;
    checkBtn.style.display = 'block';

});