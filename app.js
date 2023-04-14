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

labelScore.textContent = '😎 Score:' + score;

// fire when check button is clicked
checkBtn.addEventListener('click', () => {
    let guessValue = Number(guess.value);

    if (!guessValue) {
        message.textContent = '🙄 No number';
    }

    // when correct
    else if (guessValue === secretNumber) {

        number.textContent = secretNumber;

        if (score >= 20) {
            message.textContent = '❤️ Correct number';
            labelScore.textContent = '😎 Score:' + 20;
            document.body.style.backgroundColor = 'tomato';
        } else {
            message.textContent = '❤️ Correct number';
            score++;
            labelScore.textContent = '😎 Score:' + score;
            document.body.style.backgroundColor = 'tomato';
        }

        if (score > highscore) {
            highscore = score;
            highScore.textContent = highscore;
        }

       
    }

    // when high
    else if (guessValue > secretNumber) {

        message.textContent = '🔥 Too High';

        if (score > 1 ) {
            score--;
            labelScore.textContent = '😎 Score:' + score;
        } else {
            // message.textContent = '🔥 Too High';
            message.textContent = 'You have lost!';
            labelScore.textContent = '😎 Score:' + 0;
        }
    }

    // when low
    else if (guessValue < secretNumber) {
        
        message.textContent = '🥴 Too Low';

        if (score > 1 ) {
            score--;
            labelScore.textContent = '😎 Score:' + score;
        } else {
            message.textContent = 'You have lost!';
            labelScore.textContent = '😎 Score:' + 0;
        }
    }

});


// when clicked again button
againBtn.addEventListener('click', () => {
    message.textContent = 'Start guessing...';
    document.body.style.backgroundColor = '#222';
    number.textContent = '?';
    labelScore.textContent = '😎 Score:' + 20;
    
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    guess.value = '';
});
