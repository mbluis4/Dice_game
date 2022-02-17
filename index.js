// variables for the game state

let scorePlayer1 = 0
let scorePlayer2 = 0

let player1turn = true

// create variables to store references to the DOM nodes

let playerTurn = document.getElementById("player-turn")
let scorePlayer1_text = document.getElementById("score-player-1")
let scorePlayer2_text = document.getElementById("score-player-2")
let dice_1 = document.getElementById("dice-1")
let dice_2 = document.getElementById("dice-2")
let btnRoll = document.getElementById("btn-roll")
let turnWin = document.getElementById("turn-win")
let btnReset = document.getElementById("btn-reset")
// random generator function

let randomDice = () => {
    return Math.floor(Math.random()*6 + 1)
}

let declareWinner = (score) => {
    if (score >= 20) {
        turnWin.textContent = 'has WON'
        btnRoll.style.display= 'none'
        btnReset.style.display= 'inline'
    } 
    player1turn ? playerTurn.textContent = 1 : playerTurn.textContent = 2
    player1turn = !player1turn
}

let throwDices = () => {
    if(player1turn) {
        let roll = randomDice()
        dice_1.textContent = roll
        scorePlayer1 += roll
        scorePlayer1_text.textContent = scorePlayer1
        dice_1.classList.remove("active")
        dice_2.classList.add("active")
        declareWinner(scorePlayer1)
        
    } else {
       dice_2.textContent = randomDice() 
       let roll = randomDice()
        dice_2.textContent = roll
        scorePlayer2 += roll
        scorePlayer2_text.textContent = scorePlayer2
        dice_2.classList.remove("active")
        dice_1.classList.add("active")
        declareWinner(scorePlayer2)
    }    
}

let resetGame = () => {
    scorePlayer1 = 0
    scorePlayer2 = 0
    player1turn = true
    playerTurn.textContent = 1
    scorePlayer1_text.textContent = scorePlayer1
    scorePlayer2_text.textContent = scorePlayer2
    dice_1.textContent = '_'
    dice_2.textContent = '_'
    turnWin.textContent = 'Turn'
    btnReset.style.display ='none'
    btnRoll.style.display = 'inline'
    
}

btnRoll.addEventListener("click", throwDices)
btnReset.addEventListener("click", resetGame)