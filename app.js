const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPPER = 'PAPPER';
const SCISSOR = 'SCISSOR';
const defaultValue = ROCK;
let gameRunning = false;
const draw = "it's Draw";
const playerWin = 'Player Wins';
const computerWin = 'Computer Wins';

const getPlayerChoise = function () {
  const selection = prompt(` ${ROCK} ,${PAPPER} or ${SCISSOR} ?`).toUpperCase();
  if (selection !== ROCK && selection !== PAPPER && selection !== SCISSOR) {
    alert(`You enter an Invalid choise, I choose ${defaultValue} for you`);
    return defaultValue;
  }
  return selection;
};
const getComputerChoice = function () {
  const randomNumber = Math.random();
  if (randomNumber < 0.34) {
    return ROCK;
  } else if (randomNumber < 0.67) {
    return PAPPER;
  } else {
    return SCISSOR;
  }
};

const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return draw;
  } else if (
    (cChoice === ROCK && pChoice === PAPPER) ||
    (cChoice === PAPPER && pChoice === SCISSOR) ||
    (cChoice === SCISSOR && pChoice === ROCK)
  ) {
    return playerWin;
  } else {
    return computerWin;
  }
};
startGameBtn.addEventListener('click', function start() {
  if (gameRunning) {
    return;
  }
  gameRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoise();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
});
