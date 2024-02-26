const grid = document.querySelector('.grid');

class Block {

  constructor(xPos, yPos, color,) {
    this.xPos = xPos * 101;
    this.yPos = yPos * 21;
    this.color = color;
  }

  addToGrid() {
    const block = document.createElement('div');
    block.classList.add("block");
    block.style.left = this.xPos + "px";
    block.style.top = this.yPos + "px";
    block.style.backgroundColor = this.color;
    grid.appendChild(block);
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
  yPos: 10,

  addToGrid() {
    const user = document.createElement('div');
    user.classList.add("user");
    user.style.left = this.xPos + "px";
    user.style.bottom = this.yPos + "px";
    user.style.backgroundColor = this.color;
    grid.appendChild(user);
  },

  currentPos: this.xPos,

};

const ball = {
  xPos: 498,
  yPos: 15,

  addToGrid() {
    const ball = document.createElement('div');
    ball.classList.add("ball");
    ball.style.left = this.xPos + "px";
    ball.style.bottom = this.yPos + "px";
    ball.style.backgroundColor = this.color;
    grid.appendChild(ball);
  },

  currentPos: this.xPos,
};


let numberOfBlocks = 30;
let rows = 4;
const columns = 10;

const blocks = [];

for (let i = 0; i < numberOfBlocks; i++) {

  let randomColor = rainbow[Math.floor(Math.random() * 7)];
  let randomX = Math.floor(Math.random() * columns);
  let randomY = Math.floor(Math.random() * rows);

  // console.log(blocks.some(block => { block.xPos === randomX && block.yPos === randomY }));
  //!divide because the assignment is multiplied
  //!also array.some() doesn't work with {brackets}
  while (blocks.some(block => block.xPos / 101 === randomX && block.yPos / 21 === randomY)) {
    randomX = Math.floor(Math.random() * columns);
    randomY = Math.floor(Math.random() * rows);
  };

  const block = new Block(randomX, randomY, randomColor);
  blocks.push(block);

};

blocks.forEach(block => block.addToGrid());
user.addToGrid();
ball.addToGrid();


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
