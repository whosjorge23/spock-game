
const playerScoreElement = document.getElementById('playerScore')
const playerChoiceElement = document.getElementById('playerChoice')
const computerScoreElement = document.getElementById('computerScore')
const computerChoiceElement = document.getElementById('computerChoice')
const resulttextElement = document.getElementById('resultText')

const playerRock = document.getElementById('playerRock')
const playerPaper = document.getElementById('playerPaper')
const playerScissors = document.getElementById('playerScissors')
const playerLizard = document.getElementById('playerLizard')
const playerSpock = document.getElementById('playerSpock')

const computerRock = document.getElementById('computerRock')
const computerPaper = document.getElementById('computerPaper')
const computerScissors = document.getElementById('computerScissors')
const computerLizard = document.getElementById('computerLizard')
const computerSpock = document.getElementById('computerSpock')

const allGameIcons = document.querySelectorAll('.far')

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0
let computerScoreNumber = 0
let computerChoice = ''

//Reset all 'selected' icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  })
}

//Reset score & playerChoice/computerChoice
function resetAll() {
  playerScoreNumber = 0
  computerScoreNumber = 0
  playerScoreElement.textContent = playerScoreNumber
  computerScoreElement.textContent = computerScoreNumber
  playerChoiceElement.textContent = ''
  computerChoiceElement.textContent = ''
  resultText.textContent = ''
  resetSelected()
}

//Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random()
  if (computerChoiceNumber < 0.2) {
    computerChoice = 'rock'
  }else if (computerChoiceNumber <= 0.4) {
    computerChoice = 'paper'
  }else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'scissors'
  }else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'lizard'
  }else {
    computerChoice = 'spock'
  }
  console.log('Computer Choice: ',computerChoice)
  
}

// Check result, increase scores, update resultText 
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie!"
  }else {
    const choice = choices[playerChoice]
    if(choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You Won!"
      playerScoreNumber += 1
      playerScoreElement.textContent = playerScoreNumber

    }else{
      resultText.textContent = "Computer Won!"
      computerScoreNumber += 1
      computerScoreElement.textContent = computerScoreNumber
    }
  }
}

//Call functions to process turn
function checkResult(playerChoice) {
  resetSelected()
  computerRandomChoice()
  displayComputerChoice()
  updateScore(playerChoice)
}

//Add 'selected' styling and computerChoice
//Passing computer selection value and styling icons
function displayComputerChoice() {
  //Add 'selected' styling and computerChoice
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected')
      computerChoiceElement.textContent = ' --- Rock'
      break;
    case 'paper':
      computerPaper.classList.add('selected')
      computerChoiceElement.textContent = ' --- Paper'
      break;
    case 'scissors':
      computerScissors.classList.add('selected')
      computerChoiceElement.textContent = ' --- Scissors'
      break;
    case 'lizard':
      computerLizard.classList.add('selected')
      computerChoiceElement.textContent = ' --- Lizard'
      break;
    case 'spock':
      computerSpock.classList.add('selected')
      computerChoiceElement.textContent = ' --- Spock'
      break;
    default:
      break;
  }
}

//Passing player selection value and styling icons
function select(playerChoice) {
  console.log('Player Choice: ',playerChoice)
  checkResult(playerChoice)
  //Add 'selected' styling and playerChoice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected')
      playerChoiceElement.textContent = ' --- Rock'
      break;
    case 'paper':
      playerPaper.classList.add('selected')
      playerChoiceElement.textContent = ' --- Paper'
      break;
    case 'scissors':
      playerScissors.classList.add('selected')
      playerChoiceElement.textContent = ' --- Scissors'
      break;
    case 'lizard':
      playerLizard.classList.add('selected')
      playerChoiceElement.textContent = ' --- Lizard'
      break;
    case 'spock':
      playerSpock.classList.add('selected')
      playerChoiceElement.textContent = ' --- Spock'
      break;
    default:
      break;
  }
}

//On startup, set initial values
resetAll()