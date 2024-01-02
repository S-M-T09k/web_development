const squares      = document.querySelectorAll(".square");
const mole         = document.querySelector(".mole");
const timeDisplay  = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
const startButton  = document.querySelector("#start");
const resetButton  = document.querySelector("#reset");

let score = 0;
let molePosition;

startButton.addEventListener('click', runGame);
resetButton.addEventListener('click', resetGame);

squares.forEach((element) => {
  element.addEventListener('mousedown', () => {
    if (element.id == molePosition) {
      score++;
      scoreDisplay.textContent = score;
    }
  });

  // element.addEventListener('mouseover', (hoverElement) => {
  //   hoverElement.addEventListener('keydown', (keyPressed) => {
  //     if (keyPressed.id == molePosition && keyPressed.keyCode == 81) {
  //       score++;
  //       scoreDisplay.textContent = score;
  //     }
  //     console.log('object');
  //   });
  // })
});

function getRandomSquare()
{
  squares.forEach((element) => {
    element.classList.remove('mole');
  });

  let mole = squares[Math.floor(Math.random() * 9)];

  mole.classList.add('mole');
  molePosition = mole.id;
};

function runGame()
{
  getRandomSquare();
  window.game = setInterval(getRandomSquare, 500);
  
  //!fixing it to 10 seconds bec I don't want to spend a minute recording
  //!still need fixing I guess
  //!but this is enough for now
  //!I spent too much time on this already
  const actualTime = 60;
  let time = actualTime;
  timeDisplay.textContent = time;
  window.timer = setInterval(() => {
    time--;
    timeDisplay.textContent = time;
  }, 1000);
  
  window.stopFunction = setTimeout(stopGame, actualTime * 1000);

  function stopGame()
  {
    clearInterval(game);
    clearInterval(timer);

    squares.forEach((element) => {
      element.classList.remove('mole');
    });

    timeDisplay.textContent = time - 1;
    score = 0;
  };
};

function resetGame()
{
  clearInterval(game);           //*game
  clearInterval(timer);         //*timer
  clearTimeout(stopFunction);  //*stopGame

  squares.forEach((element) => {
    element.classList.remove('mole');
  });

  timeDisplay.textContent = "#";
  scoreDisplay.textContent = "#";
  score = 0;
};