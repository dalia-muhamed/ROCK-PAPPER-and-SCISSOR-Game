const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPPER = 'PAPPER';
const SCISSOR = 'SCISSOR';
const defaultValue = ROCK;
const draw = "it's Draw";
const playerWin = 'You Win';
const computerWin = 'Computer Win';

const getPlayerChoise = () => {
  const selection = prompt(` ${ROCK} ,${PAPPER} or ${SCISSOR} ?`).toUpperCase();
  if (selection !== ROCK && selection !== PAPPER && selection !== SCISSOR) {
    alert(`You enter an Invalid choise, I choose ${defaultValue} for you`);
    return defaultValue;
  }
  return selection;
};
const getComputerChoice = () => {
  const randomNumber = Math.random();
  return randomNumber < 0.34 ? ROCK : randomNumber < 0.67 ? PAPPER : SCISSOR;
  // if (randomNumber < 0.34) {
  //   return ROCK;
  // } else if (randomNumber < 0.67) {
  //   return PAPPER;
  // } else {
  //   return SCISSOR;
  // }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? draw
    : (cChoice === ROCK && pChoice === PAPPER) ||
      (cChoice === PAPPER && pChoice === SCISSOR) ||
      (cChoice === SCISSOR && pChoice === ROCK)
    ? playerWin
    : computerWin;
//arrow function if you use only one exp you can remove curly braces & in this case you have to remove return keyword in front of exp it already written by default in front of exp

// if (cChoice === pChoice) {
//   return draw;
// } else if (
//   (cChoice === ROCK && pChoice === PAPPER) ||
//   (cChoice === PAPPER && pChoice === SCISSOR) ||
//   (cChoice === SCISSOR && pChoice === ROCK)
// ) {
//   return playerWin;
// } else {
//   return computerWin;
// }

startGameBtn.addEventListener('click', () => {
  console.log('Game is starting...');
  const playerChoice = getPlayerChoise();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
  let message = `You picked ${playerChoice} and Computer picked ${computerChoice} so `;
  if (winner === draw) {
    message += `${draw}`;
  } else if (winner === playerWin) {
    message += `${playerWin}`;
  } else {
    message += `${computerWin}`;
  }
  alert(message);
});
