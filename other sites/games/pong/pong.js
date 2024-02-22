const gameBoard = document.querySelector('#gameBoard');
gameBoard.width = gameBoard.clientWidth;
gameBoard.height = gameBoard.clientHeight;
const ctx = gameBoard.getContext('2d');
const scoreDisplay = document.querySelector('#score');
const resetBtn = document.querySelector('#reset');
const boardWidth = gameBoard.width;
const boardHeight = gameBoard.height;
const backgroundColor = "#2a2a2a";
const paddleColor = "green";
const paddleBorder = "lightblue";
const ballColor = "white";
const ballBorderColor = "yellow";

const ballRadius = 12;
const paddleSpeed = 50;

let intervalID;
let ballSpeed = 1;
let ballX = boardWidth / 2;
let ballY = boardHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;

let paddle1 = {
  width: 25,
  height: 100,
  x: 0,
  y: 0,
};
let paddle2 = {
  width: 25,
  height: 100,
  x: boardWidth - 25,
  y: boardHeight - 100,
};

window.addEventListener('keydown', changeDirection);
resetBtn.addEventListener('click', resetGame);

startGame();


function startGame() {

  createBall();
  tick();

};

function tick() {

  intervalID = setTimeout(() => {
    clearBoard();
    drawPaddles();
    moveBall();
    drawBall(ballX, ballY);
    checkCollision();
    tick();
  }, 10);

};

function clearBoard() {

  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, boardWidth, boardHeight);

};

function drawPaddles() {

  ctx.strokeStyle = paddleBorder;

  ctx.fillStyle = paddleColor;
  ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
  ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
  ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
  ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);

};

function createBall() {



};

function moveBall() {



};

function drawBall(x, y) {



};

function checkCollision() {



};

function changeDirection(event) {

  keyCode = event.keyCode;

};

function updateScore() {



};

function resetGame() {



};