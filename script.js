'use strict';
let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);
// Generating a random number from 1 to 20.

const start = document.querySelector('.start');
// start guessing... 

let score = document.querySelector('.score');
// How many times you have left to play

const highScore = document.querySelector('.currenthigh');

let scoreChance = 20;
// score Number

let highestScore = 0;
// highscore number to be updated

// button to carry out functions
document.querySelector('.check-btn').addEventListener('click', function() {
    const predict = Number(document.querySelector('.predict-num').value);
    // inserted number
    if (!predict) {
        start.textContent = 'Insert a number 😑';
    } else if (predict < randomNumber){
        start.textContent = 'Too Low 📉';
        scoreChance--
        document.querySelector('.score').textContent = scoreChance;
        if (scoreChance < 1) {
            start.textContent = 'You lost Bro😢'
            score.textContent = 0;
        }
    } else if (predict > randomNumber) {
        start.textContent = 'Too High 📈';
        scoreChance--
        document.querySelector('.score').textContent = scoreChance;
        if (scoreChance < 1) {
            start.textContent = 'You lost Bro😢'
            score.textContent = 0;
        }
    } else if (predict === randomNumber) {
        start.textContent = 'Correct 💜';
        
        document.body.style.backgroundColor = "#001d3d";
        document.querySelector('.number').textContent = randomNumber; 
        // put generated number in the number element
        document.querySelector('.number').backgroundColor = '#003566'
        document.querySelector('.number').style.backgroundColor = '#003566'
        document.querySelector('.again-btn').style.backgroundColor = '#003566'
        if (scoreChance > highestScore) {
            highestScore = scoreChance;
            highScore.textContent = highestScore;
        }

    }
})

document.querySelector('.again-btn').addEventListener('click', function() {
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    console.log(randomNumber);
    scoreChance = 20;
    score = '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.predict-num').value = '';
    document.body.style.backgroundColor = '#000000';
    document.querySelector('.score').textContent = score;
    document.querySelector('.start').textContent = '😎 Start Guessing...';
})