const grid = document.querySelector('.grid');


for (let i = 1; i < 21 * 3; i += 21) {

  for (let j = 1; j < 101 * 10; j += 101) {
    createAndAddBlock(j, i);
  };

};


const user = document.createElement('div');
const userStartPos = 460;
let userCurrentPos = userStartPos;
user.classList.add('user');
user.style.bottom = "10px"
user.style.left = userStartPos + 'px';
grid.appendChild(user);

function createAndAddBlock(blockX, blockY) {

  const block = document.createElement('div');
  block.classList.add("block");
  block.style.left = blockX + "px";
  block.style.top = blockY + "px";
  grid.appendChild(block);

  //// console.log(blockX, blockY);
}
