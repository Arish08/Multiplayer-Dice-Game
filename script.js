'use strict';
const diceimg= document.querySelector(".dice")
const diceRoll = document.querySelector(".btn--roll")
const dicenew = document.querySelector(".btn--new")
const dicehold = document.querySelector(".btn--hold")
let currentscore0 = document.getElementById("current--0")
let currentscore1 = document.getElementById("current--1")
let activePlayer = 0
let currentScore=0
let player1 = document.querySelector(".player--0")
let player2 = document.querySelector(".player--1")
let score0 = document.getElementById("score--0")
let score1 = document.getElementById("score--1")
let mainscore = [0,0]

score0.textContent= 0
score1.textContent=0
currentscore1.textContent=0
currentscore0.textContent=0
let playing = true


document.querySelector(".dice").classList.add("hidden")
// player1 = 0;
// player2 = 0

// Add Scores to current Current 

// Switch Player Functionality
const switchPlayer = function(){
document.getElementById(`current--${activePlayer}`).textContent=0
currentScore = 0
activePlayer = activePlayer === 0 ? 1:0
player1.classList.toggle("player--active")
player2.classList.toggle("player--active")
}


// Dice Roll Functionality
diceRoll.addEventListener('click', function(){
    if(playing){
    document.querySelector(".dice").classList.remove("hidden")
  
    console.log(mainscore[activePlayer])
    const randomNumber = Math.trunc(Math.random()*6)+1
    diceimg.src = `dice-${randomNumber}.png`
    if(randomNumber!==1){
    currentScore = currentScore + randomNumber
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    }else{
        switchPlayer()
    } 
    }
})

// Dice Hold Functionality
dicehold.addEventListener('click', function(){
if(playing){
    mainscore[activePlayer]=mainscore[activePlayer]+currentScore
    document.querySelector(`#score--${activePlayer}`).textContent=mainscore[activePlayer]
    console.log(mainscore)
    if(mainscore[activePlayer]>=10){
    playing=false
    diceimg.classList.add('hidden')
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
    document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`)

    }
    else{
    switchPlayer()
    }
}
})

// Resetting Game
dicenew.addEventListener("click", function(){
    reset()
})

const reset = function() {
mainscore=[0,0]
activePlayer=0;
currentScore=0;
score0.textContent=0 
score1.textContent=0 
currentscore0.textContent=0
currentscore1.textContent=0  
diceimg.classList.add('hidden');
playing = true;

player1.classList.remove('player--winner');
player2.classList.remove('player--winner');

player1.classList.add('player--active');
player2.classList.remove('player--active');



}



