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
    // throw { message: 'invalid user input' };
    return;
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

const getWinner = (cChoice, pChoice = defaultValue) =>
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

let winner;
startGameBtn.addEventListener('click', () => {
  console.log('Game is starting...');
  const playerChoice = getPlayerChoise();
  const computerChoice = getComputerChoice();
  if (playerChoice) {
    winner = getWinner(playerChoice, computerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  console.log(winner);
  let message = `You picked ${
    playerChoice || defaultValue
  } and Computer picked ${computerChoice} so `;
  if (winner === draw) {
    message += `${draw}`;
  } else if (winner === playerWin) {
    message += `${playerWin}`;
  } else {
    message += `${computerWin}`;
  }
  alert(message);
});

const arr1 = numbers => {
  let sum = 0;
  // function inside function's scoope can only call inside not like global one can call everywhere
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  return sum;
};
console.log(arr1([2, 5, 9]));

const showResult = result => {
  alert(`The sum of numbers is ${result}`);
};

const arr2 = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  resultHandler(sum);
};
arr2(showResult, 1, 2, 5, 9);
const arr5 = [1, 5, 99, 40];
console.log(Math.max(...arr5));

const arr3 = function (...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};
console.log(arr3(1, 2, 5, 9));
