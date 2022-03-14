//Your game is going to play against the computer, so begin with a function called computerPlay that will
// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
//We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

//let computer = Math.floor(Math.random()*3) + 1;
//let playerSelection = cleanPlayerEntry(playerChoice);

//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
function cleanPlayerEntry() {
    let playerChoice = prompt("Select your hand!");
    playerChoice = playerChoice.toUpperCase();
    if (playerChoice.toUpperCase() == 'ROCK') {
        return playerSelection = 'Rock';
    } else if (playerChoice.toUpperCase() == 'PAPER') {
        return playerSelection = 'Paper';
    } else if (playerChoice.toUpperCase() == 'SCISSOR') {
        return playerSelection = 'Scissors';
    } else if (playerChoice.toUpperCase() == 'SCISSORS') {
        return playerSelection = 'Scissors';
    } else { playerSelection = 'Invalid Entry'; 
}
    return  playerSelection;
}

function computerChoice() {
    let computer = Math.floor(Math.random()*3) + 1;
if (computer == 1) {
    computerPlay = 'Rock';
} else if (computer == 2) {
    computerPlay = 'Paper';
} else { computerPlay = 'Scissors';
}
return computerPlay;
}
let winner;
//Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters - the playerSelection and computerSelection - 
//and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function playGame(computerPlay,playerSelection) {
if (playerSelection == 'Invalid Entry') { 
    console.log('Game Aborted');
     return winner = 'Aborted';
    } else if ((computerPlay) == (playerSelection)) {
        console.log(`DRAW! ${playerSelection} and ${computerPlay} ties!`)
        return winner = 'Tie';
    } else if ((computerPlay == 'Paper') && (playerSelection == 'Rock')) {
        console.log(`Computer Wins! ${computerPlay} beats ${playerSelection}!`) 
        return winner = 'Computer';
    } else if ((computerPlay == 'Rock') && (playerSelection == 'Scissors')) {
        console.log(`Computer Wins! ${computerPlay} beats ${playerSelection}!`) 
        return winner = 'Computer';
    } else if ((computerPlay == 'Scissors') && (playerSelection == 'Paper')) {
        console.log(`Computer Wins! ${computerPlay} beats ${playerSelection}!`) 
        return winner = 'Computer';
    } else console.log(`You win! ${playerSelection} beats ${computerPlay}`) 
    return winner = 'Player';
}

function game() {
    let round = 0;
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    for (i = 0; i < 5; i++) {
    round++;
    console.log(`Round ${round} - 1, 2, 3 - FIGHT!`);
    console.log('Player selected: '+cleanPlayerEntry());
    computerChoice();
    console.log('Computer selected: '+computerPlay);
    playGame(computerPlay,playerSelection);
    if (winner == 'Player') {
        playerWins++;
        console.log(playerWins);
    } else if (winner == 'Computer') {
        computerWins++;
        console.log(computerWins);
    } else if (winner == 'Tie') {
        ties++;
        console.log(ties);
    } else { (winner == 'Game abondend'); {
        return;
    }
}
}
let champion;
championDecider(ties,playerWins,computerWins);
function championDecider(ties,playerWins,computerWins) {
	//is ties = player or ties = computer or player = computer?
    if ((ties > playerWins) && (ties > computerWins) || (playerWins == computerWins)) {
        return champion = 'Tie!';
	//is player > computer?
    } else if (playerWins > computerWins) {
        return champion = 'Player Wins!';
    } else if (playerWins < computerWins) { 
        return champion = "Computer Wins!";
}
}
console.log(`Ties: ${ties},Player Wins: ${playerWins},Computer Wins: ${computerWins}`);
console.log(champion);
}

game();
