let sum = 0,
    random;
let img = document.getElementById('diceImage');
let time = 20;

function rollDice() {
    "use strict";

    if (time == 20) {
        countDown();
    }

    if (time <= 0) {
        document.getElementById('rollButton').disable = true;
    }

    random = Math.floor(Math.random() * 6 + 1);
    sum = sum + random;
    document.getElementById('player1Score').innerHTML = random;
    img.src = "dice-" + random + ".png";
    document.getElementById('totalScore').innerHTML = sum;

}


//function newGame() {
//    document.getElementById('player1Score').innerHTML = 0;
//    document.getElementById('totalScore').innerHTML = 0;
//    sum = 0;
//    document.getElementById('timer').innerHTML = 20;
//
//}


function countDown() {
    if (time <= 0) {
        document.getElementById('rollButton').disabled = true;
    } 
    else {
        --time;
        document.getElementById('timer').innerHTML = time+"s";
    }

    setTimeout(function() {countDown();}, 1000);
}
