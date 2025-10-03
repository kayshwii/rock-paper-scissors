// create the game Rock Paper Scissors to be played via the console.
// game will be played against the computer
// need to generate a computer choice
// need to capture a player choice
// need to compare the choices to decide the winner
// need to record the score


/*
Project part 2 - ui
create 3 buttons, one for each selection
add an event listener that calls playRound every time a button is clicked
*/

//get the elements
const buttons = document.querySelectorAll('.button')
const resultContainer = document.querySelector('#results')
const result = document.createElement('span')
const playerScoreContainer = document.querySelector('#playerScore')
const computerScoreContainer = document.querySelector('#computerScore')

//buton event handler
let buttonHandler = e => {
    let humanSelection = e.target.id
    let computerSelection = getComputerChoice()
    resultContainer.appendChild(result)
    playRound(humanSelection, computerSelection)
    
}

//add event handler to each button
buttons.forEach(button => button.addEventListener('click', buttonHandler))


// write a function that returns a random choice (rock, paper, or scissor)
let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3)
    return choice === 0 ? 'rock' : choice === 1 ? 'paper' : 'scissors'
}

// write a function to get the human choice
// let getHumanChoice = () => prompt('Rock, paper, or scissors?')

// record the score
let humanScore = 0
let computerScore = 0


// let playGame = () => {
//     // for (let i = 1; i <= 5; i++) {
//     //     console.log(`Round ${i}`)
//     //     let computerSelection = getComputerChoice()
//     //     let humanSelection = getHumanChoice()
//     //     humanSelection = humanSelection.toLowerCase()
//     //     playRound(humanSelection, computerSelection)     
//     // }
//     humanScore === computerScore ? console.log('The game ended in a tie!') :
//     humanScore > computerScore ? console.log('You win the match!') :
//     console.log('You lost the match!')
// }

let playRound = (humanChoice, computerChoice) => {
    if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        result.innerText = `You chose ${humanChoice}. The computer chose ${computerChoice}. You win!`
        humanScore ++
        playerScoreContainer.innerText = humanScore
    } else if (humanChoice === computerChoice) {
        result.innerText = `You chose ${humanChoice}. The computer chose ${computerChoice}. Draw!`
    } else {
        result.innerText = `You chose ${humanChoice}. The computer chose ${computerChoice}. You lose!`
        computerScore++ 
        computerScoreContainer.innerText = computerScore

    }
    if (humanScore === 5) {
        result.innerText = 'You win!'
        humanScore = 0
        computerScore = 0
        computerScoreContainer.innerText = computerScore
        playerScoreContainer.innerText = humanScore
    }
    if (computerScore === 5) {
        result.innerText = 'You lose!'
        humanScore = 0
        computerScore = 0
        computerScoreContainer.innerText = computerScore
        playerScoreContainer.innerText = humanScore
    }
}
