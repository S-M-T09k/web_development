class snakeBody {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  };
};

const gameBoard = document.querySelector('#gameBoard');
const ctx = gameBoard.getContext('2d');
const scoreDisplay = document.querySelector('#score');
const resetButton = document.querySelector('#reset');
const startButton = document.querySelector('#start');
const buttons = document.querySelectorAll('.buttons');
const gameContainer = document.querySelector('#gameContainer');

const boardWidth = gameBoard.clientWidth;
const boardHeight = gameBoard.clientHeight;
console.log('boardWidth :>> ', boardWidth);
console.log('boardHeight :>> ', boardHeight);

const backgroundColor = "#333333";
const snakeColor = "lightgreen";
const snakeBoarder = "grey";
const foodColor = "red";
const unitSize = 20;

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;

let foodX;
let foodY;

let snake = [

  new snakeBody(unitSize*4, 0),
  new snakeBody(unitSize*3, 0),
  new snakeBody(unitSize*2, 0),
  new snakeBody(unitSize, 0),
  new snakeBody(0, 0),

];

let score = 0;

startButton.addEventListener('click', startGame);

// for (let i = 0; i < 100; i++) {
//   let n = createFood();
//   console.log(n[0] % 2 === 0 && n[0] < 500);
//   console.log(n[1] % 2 === 0 && n[1] < 500);
//   drawFood();
//   setTimeout(clearBoard, 1000);
// };
// console.log(boardWidth - unitSize);


function startGame() {

  resetButton.addEventListener('click', resetGame);
  gameBoard.addEventListener('keypress', changeDirection);
  startButton.addEventListener('keypress', changeDirection);
  startButton.removeEventListener('click', startGame);

  running = true;
  scoreDisplay.textContent = "";
  scoreDisplay.classList.add('rotating');

  setTimeout(() => {

    scoreDisplay.classList.remove('rotating');
    scoreDisplay.textContent = score;
    createFood();
    tick();

  }, 500);

};

function tick() {
  if (running) {
    setTimeout(() => {

      clearBoard();
      drawFood();
      moveSnake();
      drawSnake();
      checkGameOver();
      tick();

    }, 100)
  }
  else {
    displayGameOver();
  };
};

function clearBoard() {

  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, boardWidth, boardHeight);

};

function createFood() {

  foodX = randomFood(boardWidth);
  foodY = randomFood(boardHeight);

  function randomFood(max) {
    const randomNum = Math.floor((Math.random() * max) / unitSize) * unitSize;
    return randomNum;
  };

  //// console.log('foodX :>> ', foodX);
  //// console.log('foodY :>> ', foodY);
  return [foodX, foodY];

};

function drawFood() {

  ctx.fillStyle = foodColor;
  ctx.fillRect(foodX, foodY, unitSize, unitSize);
  // console.log(foodX);
  // console.log(foodY);

};

function moveSnake() {

  const head = {x: snake[0].x + xVelocity,
                y: snake[0].y + yVelocity};

  snake.unshift(head);

  if (snake[0].x === foodX && snake[0].y === foodY) {
    score++;
    scoreDisplay.textContent = score;
    createFood();
  }
  else {
    snake.pop();
  };

};

function drawSnake() {

  ctx.fillStyle = snakeColor;
  ctx.strokeStyle = snakeBoarder;
  snake.forEach((part) => {
    
    ctx.fillRect(part.x, part.y, unitSize, unitSize);
    ctx.strokeRect(part.x, part.y, unitSize, unitSize);

  })
  
};

function changeDirection(event) {

  const key = event.key;

  const goingUp = (yVelocity === -unitSize);
  const goingDown = (yVelocity === unitSize);
  const goingLeft = (xVelocity === -unitSize);
  const goingRight = (xVelocity === unitSize);

  switch (true) {

    case (!goingDown && key === 'w'):
    case (!goingDown && key === 'ArrowUp'):
      xVelocity = 0;
      yVelocity = -unitSize;
      break;

    case (!goingUp && key === 's'):
    case (!goingUp && key === 'ArrowDown'):
      xVelocity = 0;
      yVelocity = unitSize;
      break;

    case (!goingRight && key === 'a'):
    case (!goingRight && key === 'ArrowLeft'):
      xVelocity = -unitSize;
      yVelocity = 0;
      break;

    case (!goingLeft && key === 'd'):
    case (!goingLeft && key === 'ArrowRight'):
      xVelocity = unitSize;
      yVelocity = 0;
      break;

    default:
      console.log(`you're pressing ${key}`);
      break;

  };

};

function checkGameOver() {

  switch(true){

    case snake[0].x < 0:
    case snake[0].x >= boardWidth:
    case snake[0].y < 0:
    case snake[0].y >= boardHeight:
      running = false;
      break;

  };

  for (let i = 1; i < snake.length; i++) {
    const bodyPart = snake[i];
    if (bodyPart.x === snake[0].x && bodyPart.y === snake[0].y) {
      running = false;
    };
  };

};

function displayGameOver() {
  ctx.font = "50px MV Boli";
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.fillText("Game Over!!", boardWidth/2, boardHeight/2);
};

function resetGame() {
  
  running = false;
  clearBoard();
  score = 0;
  xVelocity = unitSize;
  yVelocity = 0;
  scoreDisplay.textContent = "";

  snake = [

    new snakeBody(unitSize*4, 0),
    new snakeBody(unitSize*3, 0),
    new snakeBody(unitSize*2, 0),
    new snakeBody(unitSize, 0),
    new snakeBody(0, 0),
  
  ];

  scoreDisplay.classList.add("rotating");
  setTimeout(() => {

    scoreDisplay.classList.remove("rotating");
    scoreDisplay.textContent = score;
    startButton.addEventListener('click', startGame);

  }, 100);

};