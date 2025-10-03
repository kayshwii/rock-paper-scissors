// create the game Rock Paper Scissors to be played via the console.
// game will be played against the computer
// need to generate a computer choice
// need to capture a player choice
// need to compare the choices to decide the winner
// need to record the score

// write a function that returns a random choice (rock, paper, or scissor)
let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3)
    return choice === 0 ? 'rock' : choice === 1 ? 'paper' : 'scissors'
}

// write a function to get the human choice
let getHumanChoice = () => prompt('Rock, paper, or scissors?')

// record the score
let humanScore = 0
let computerScore = 0

// let playRound = (humanChoice, computerChoice) => {
//     humanChoice = humanChoice.toLowerCase()
//     console.log('You: ' + humanChoice)
//     console.log('Computer: ' + computerChoice)
//     if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
//         (humanChoice === 'paper' && computerChoice === 'rock') ||
//         (humanChoice === 'scissors' && computerChoice === 'paper')) {
//         console.log ('you win!')
//         humanScore ++
//         console.log(`Your score is ${humanScore}`)
//     } else if (humanChoice === computerChoice) {
//         console.log('draw. refresh to play again')
//     } else {
//         computerScore++ 
//         console.log('you lose!')
//         console.log(`Computer's score is ${computerScore}`)
//     }
// }

// const computerSelection = getComputerChoice()
// const humanSelection = getHumanChoice()


// playRound(humanSelection, computerSelection)

let playGame = () => {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`)
        let computerSelection = getComputerChoice()
        let humanSelection = getHumanChoice()
        humanSelection = humanSelection.toLowerCase()
        playRound(humanSelection, computerSelection)     
    }
    humanScore === computerScore ? console.log('The game ended in a tie!') :
    humanScore > computerScore ? console.log('You win the match!') :
    console.log('You lost the match!')
}

let playRound = (humanChoice, computerChoice) => {
    console.log(`You: ${humanChoice}`)
    console.log(`Computer: ${computerChoice}`)
    if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log ('you win!')
        humanScore ++
        console.log(`Your score is ${humanScore}`)
        console.log(`Computer's score is ${computerScore}`)
    } else if (humanChoice === computerChoice) {
        console.log('draw')
        console.log(`Your score is ${humanScore}`)
        console.log(`Computer's score is ${computerScore}`)
    } else {
        computerScore++ 
        console.log('you lose!')
        console.log(`Your score is ${humanScore}`)
        console.log(`Computer's score is ${computerScore}`)
    }
}

playGame()