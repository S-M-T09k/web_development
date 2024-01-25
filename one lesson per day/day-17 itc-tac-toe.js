const cells = document.querySelectorAll('#day-17 #cellContainer .cell');
const gameStatusDisplay = document.querySelector('#day-17 #gameStatus');
const restartTicTacToeButton = document.querySelector('#day-17 #resetTicTacToe');
const startTicTacToe = document.querySelector('#day-17 #startTicTacToe');

// console.log(gameStatusDisplay);
// console.log(restartButton);
// console.log(cells);

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 'X';
let ticTacToeRunning = false;


startTicTacToe.addEventListener('click', initializeTicTacToe);


//*functions
function initializeTicTacToe() {

  ticTacToeRunning = true;

  cells.forEach((cell) => {
    cell.addEventListener('click', cellChecked);
  });

  gameStatusDisplay.textContent = `${currentPlayer}'s turn`;
  restartTicTacToeButton.addEventListener('click', restartTicTacToe);
  startTicTacToe.removeEventListener('click', initializeTicTacToe);

};

function cellChecked() {

  const cellIndex = this.getAttribute("cellIndex");

  if (options[cellIndex] == "" && ticTacToeRunning) {

    updateCell(this, cellIndex);
    checkTicTacToeWinner();

  };

};

function updateCell(cell, index) {

  cell.textContent = currentPlayer;
  options[index] = currentPlayer;
  console.log(options);

};

function changePlayer() {

  if (currentPlayer == "X") {
    currentPlayer = "O";
  }
  else if (currentPlayer == "O") {
    currentPlayer = "X";
  }
  else {
    console.error(currentPlayer);
  };

  gameStatusDisplay.textContent = `${currentPlayer}'s turn`;

};

function checkTicTacToeWinner() {

  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {

    const condition = winConditions[i];
    const firstCell = options[condition[0]];
    console.log("firstCell", firstCell);
    const secondCell = options[condition[1]];
    console.log("secondCell", secondCell);
    const thirdCell = options[condition[2]];
    console.log("thirdCell", thirdCell);

    if (firstCell == "" || secondCell == "" || thirdCell == "") {
      continue;
    };

    if (firstCell == secondCell && secondCell == thirdCell) {
      console.log("what now");
      roundWon = true;
      break;
    };

  };

  if (roundWon == true) {
    gameStatusDisplay.textContent = `${currentPlayer} won the game`;
    ticTacToeRunning = false;
  }
  else if (!options.includes("")) {
    gameStatusDisplay.textContent = `The game was drawn`;
    ticTacToeRunning = false;
  }
  else {
    changePlayer();
  };

};

function restartTicTacToe() {

  options = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = 'X';
  ticTacToeRunning = false;
  cells.forEach(cell => cell.textContent = "");
  gameStatusDisplay.textContent = "";
  startTicTacToe.addEventListener('click', initializeTicTacToe);

};

