// let object = undefined;

// console.log(object);

// if (object === null || object === undefined) {
//   console.log("what?");
// }

// for (let j = 1; j < 21 * 3; j += 21) {

//   for (let i = 1; i < 101 * 10; i += 101) {
//     console.log(i, j);
//   };

// };



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

let rainbow = "#ffffff";
const blocks = [];

for (let i = 0; i < 100; i++) {

  let randomColor = rainbow;
  let randomX = Math.floor(Math.random() * 10);
  let randomY = Math.floor(Math.random() * 4);

  while (blocks.some((block) => {block.xPos === randomX && block.yPos === randomY})) {
    randomX = Math.floor(Math.random() * 10);
    randomY = Math.floor(Math.random() * 4);
  }

  const block = new Block(randomX, randomY, randomColor);
  blocks.push(block);
}

// blocks.forEach((block) => {
//   console.log("x: " + block.xPos + ", y: " + block.yPos);
// });

console.log(
  blocks.some((block) => {
    return block.xPos === 0 && block.yPos === 0;
  })
);