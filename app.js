const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPPER = 'PAPPER';
const SCISSOR = 'SCISSOR';
const defaultValue = ROCK;
let gameRunning = false;

const getPlayerChoise = function () {
  const selection = prompt(
    `Choose ${ROCK} ,${PAPPER} or ${SCISSOR}`
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPPER && selection !== SCISSOR) {
    alert(`You enter an Invalid choise, I choose ${defaultValue} for you`);
    return defaultValue;
  }
  return selection;
};
const startGame = startGameBtn.addEventListener('click', function start() {
  if (gameRunning) {
    return;
  }
  gameRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoise();
  console.log(playerSelection);
});
