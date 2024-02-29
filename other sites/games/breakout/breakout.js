const grid = document.querySelector('.grid');
const gameConditionDisplay = document.querySelector('.score');
const startButton = document.querySelector('.startGame');
const resetButton = document.querySelector('.reset');
const mouseMoveArea = document.querySelector('.mouseMoveArea');

class Block {

  constructor(xPos, yPos, color,) {
    this.xPos = xPos * 101;
    this.yPos = (yPos + 24 - rows) * 21;
    this.color = color;
    this.topLeft = [xPos * 101, ((yPos + 24 - rows) * 21) + this.height];
    this.bottomLeft = [xPos * 101, (yPos + 24 - rows) * 21];
    this.topRight = [xPos * 101 + this.width, ((yPos + 24 - rows) * 21) + this.height];
    this.bottomRight = [xPos * 101 + this.width, (yPos + 24 - rows) * 21];
  }
  width = 100;
  height = 20;

  addToGrid() {
    const block = document.createElement('div');
    block.classList.add("block");
    block.style.left = this.xPos + "px";
    block.style.bottom = this.yPos + "px";
    block.style.backgroundColor = this.color;
    grid.appendChild(block);

    this.block = block;
  }

  draw() {
    this.block.style.left = this.xPos + "px";
    this.block.style.bottom = this.yPos + "px";
  }

  remove() {
    this.block.remove();
    delete this;
  }

};

const rainbow = [
  '#FF0000',
  '#FF7F00',
  '#FFFF00',
  '#00FF00',
  '#0000FF',
  '#4B0082',
  '#8B00FF'
];

const user = {
  xPos: 460,
  yPos: 20,
  width: 90,
  height: 5,

  addToGrid() {
    const paddle = document.createElement('div');
    paddle.classList.add("user");
    paddle.style.left = this.xPos + "px";
    paddle.style.bottom = this.yPos + "px";
    paddle.style.backgroundColor = this.color;
    grid.appendChild(paddle);

    this.paddle = paddle;
  },

  draw() {
    this.paddle.style.left = this.xPos + "px";
    this.paddle.style.bottom = this.yPos + "px";
  },

  getCurrentPosition() {
    let bottomLeft = [this.xPos, this.yPos];
    let bottomRight = [this.xPos + this.width, this.yPos];
    let topLeft = [this.xPos, this.yPos + this.height];
    let topRight = [this.xPos + this.width, this.yPos + this.height];

    return {
      bottomLeft: bottomLeft,
      bottomRight: bottomRight,
      topLeft: topLeft,
      topRight: topRight,
    };
  },

  initialPosition: [460, 15],
};
// console.log(user);

const ball = {
  xPos: 498,
  yPos: user.yPos + 5,
  width: 14,
  height: 14,
  xVelocity: 5,
  yVelocity: 2,

  addToGrid() {
    const ball = document.createElement('div');
    ball.classList.add("ball");
    ball.style.left = this.xPos + "px";
    ball.style.bottom = this.yPos + "px";
    ball.style.backgroundColor = this.color;
    grid.appendChild(ball);

    this.ball = ball;
  },

  draw() {
    this.ball.style.left = this.xPos + "px";
    this.ball.style.bottom = this.yPos + "px";
  },

  initialPos: [498, user.yPos + 5],
};
// console.log(ball);


let numberOfBlocks = 15;
let rows = 2;
let score = 0;
const columns = 10;
let timer;

//*create the ball, user and blocks and place them on the grid
let blocks = [];
user.addToGrid();
ball.addToGrid();
createAndAddBlocksToGrid();

//*The actual game
startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);

const tick = () => {
  moveBall();
  gameConditionDisplay.textContent = "Score: " + score;
  checkCollision();
  checkWin();
}

function createAndAddBlocksToGrid() {
  for (let i = 0; i < numberOfBlocks; i++) {

    let randomColor = rainbow[Math.floor(Math.random() * 7)];
    let randomX = Math.floor(Math.random() * columns);
    let randomY = Math.floor(Math.random() * rows);

    // console.log(blocks.some(block => { block.xPos === randomX && block.yPos === randomY }));
    ////also array.some() doesn't work with {brackets}
    //!divide because the assignment is multiplied
    while (blocks.some((block) => { return block.xPos / 101 === randomX && block.yPos === (randomY + 24 - rows) * 21 })) {
      randomX = Math.floor(Math.random() * columns);
      randomY = Math.floor(Math.random() * rows);
    };

    const block = new Block(randomX, randomY, randomColor);
    blocks.push(block);

  };

  blocks.forEach(block => block.addToGrid());

}

function moveBall() {
  ball.xPos += ball.xVelocity;
  ball.yPos += ball.yVelocity;
  ball.draw();
}

function moveUser(event) {
  // console.log(event);
  // console.log(user.getCurrentPosition());
  // console.log(ball.xPos, ball.yPos);
  user.xPos = event.layerX - user.width / 2;
  if (user.xPos < 0) user.xPos = 0;
  if (user.xPos > grid.clientWidth - user.width) user.xPos = grid.clientWidth - user.width;
  user.draw();
}

function checkCollision() {

  const gridWidth = grid.clientWidth - ball.width;
  const gridHeight = grid.clientHeight - ball.height;

  //*for blocks
  for (const block of blocks) {
    // console.log(block);
    if (
      ball.xPos > block.bottomLeft[0] &&
      ball.xPos < block.bottomRight[0] &&
      (ball.yPos + ball.height) > block.bottomLeft[1] &&
      ball.yPos < block.topLeft[1]
    ) {
      // console.log("a block should have got deleted");
      const index = blocks.indexOf(block);
      if (index <= -1) {
        return;
      };
      blocks.splice(index, 1);
      ball.yVelocity *= -1;
      block.remove();
      score++;
      // console.log(blocks);
    };

  };

  switch (true) {
    case ball.yPos <= 0:
      stopGame();
      gameConditionDisplay.textContent = "You Lose";
      break;
    case ball.yPos >= gridHeight:
      ball.yVelocity *= -1;
      break;
    case ball.xPos >= gridWidth:
    case ball.xPos <= 0:
      ball.xVelocity *= -1;
      break;

    default:
      break;
  };

  if (
    ball.xPos > user.getCurrentPosition().bottomLeft[0] &&
    ball.xPos < user.getCurrentPosition().bottomRight[0] &&
    (ball.yPos + ball.width) > user.getCurrentPosition().bottomLeft[1] &&
    ball.yPos < user.getCurrentPosition().topLeft[1]
  ) {

    ball.yVelocity *= -1;
    if (ball.xVelocity >= 1) {
      ball.xVelocity -= Math.ceil(Math.random() * ball.xVelocity - 1);
    }
    else if (ball.xVelocity <= -1) {
      ball.xVelocity += Math.ceil(Math.random() * ball.xVelocity - 1);
    };
    ball.xVelocity *= Math.random() > 0.5 ? -1 : 1;

  };
}

function checkWin() {
  if (blocks.length === 0) {
    stopGame();
    gameConditionDisplay.textContent = "You Win!";
    numberOfBlocks += Math.floor(Math.random() * 15);
    rows += 1;
    ball.yVelocity *= ball.yVelocity > 0 ? 1 : -1;
    ball.yVelocity += 1;
  }
}

function stopGame() {
  clearInterval(timer);
  mouseMoveArea.removeEventListener('mousemove', moveUser);
}

function startGame() {
  timer = setInterval(tick, 10);
  mouseMoveArea.addEventListener('mousemove', moveUser);
  startButton.removeEventListener('click', startGame);
  gameConditionDisplay.textContent = "Score: " + score;
}

function resetGame() {
  startButton.addEventListener('click', startGame);
  gameConditionDisplay.textContent = "Unbegun";
  score = 0;
  blocks.forEach(block => block.remove());
  blocks = [];
  ball.xPos = ball.initialPos[0];
  ball.yPos = ball.initialPos[1];
  ball.draw();
  ball.yVelocity *= ball.yVelocity > 0 ? 1 : -1;
  user.xPos = user.initialPosition[0];
  user.yPos = user.initialPosition[1];
  user.draw();
  createAndAddBlocksToGrid();
}


//// blocks.forEach((block) => { block.addToGrid(); });
// let placedBlocks = [];

// for (let i = 0; i < numberOfBlocks; i++) {

//   let randomColor = rainbow[Math.floor(Math.random() * 7)];
//   let randomX = Math.floor(Math.random() * 10);
//   let randomY = Math.floor(Math.random() * 4);

//   for (const element of placedBlocks) {
//     if ([randomX, randomY] == element) {
//       break;
//     }
//   }

//   const block = new Block(randomX, randomY, randomColor);
//   block.addToGrid();
//   placedBlocks.push([randomX, randomY]);

// };



// //document.createElement('div');
// //const userStartPos = 460;
// //let userCurrentPos = userStartPos;
// //user.classList.add('user');
// //user.style.bottom = "10px"
// //user.style.left = userStartPos + 'px';
// //grid.appendChild(user);

// //function createAndAddBlock(blockX, blockY) {

// //  const block = document.createElement('div');
// //  block.classList.add("block");
// //  block.style.left = blockX + "px";
// //  block.style.top = blockY + "px";
// //  grid.appendChild(block);

//   //// console.log(blockX, blockY);
// //}

// const blocks = [
//   new Block(0, 0, rainbow[Math.floor(Math.random() * 7)]),
//   new Block(1, 0, rainbow[Math.floor(Math.random() * 7)]),
//   new Block(2, 0, rainbow[Math.floor(Math.random() * 7)]),
//   new Block(3, 0, rainbow[Math.floor(Math.random() * 7)]),
//   new Block(4, 0, rainbow[Math.floor(Math.random() * 7)]),
//   new Block(5, 0, rainbow[Math.floor(Math.random() * 7)]),
//   new Block(6, 0, rainbow[Math.floor(Math.random() * 7)]),
//   new Block(0, 1, rainbow[Math.floor(Math.random() * 7)]),
//   new Block(1, 1, rainbow[Math.floor(Math.random() * 7)]),
//   new Block(2, 1, rainbow[Math.floor(Math.random() * 7)]),
//   new Block(3, 1, rainbow[Math.floor(Math.random() * 7)]),
// ];
