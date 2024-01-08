const startAnimationBtn = document.querySelector('#startAnimation');
const resetAnimationBtn = document.querySelector('#resetAnimation');
const boxToAnimate = document.querySelector('#toAnimate');

startAnimationBtn.addEventListener('click', playAnimation);
resetAnimationBtn.addEventListener('click', resetAnimation);

function playAnimation() {
  
  let xPosition = 0; //*horizontal
  let yPosition = 0; //*vertical
  let moveSpeed = 5;

  let degrees = 0;
  //*rotateX == top and bottom
  //*rotateY == left and right
  //*rotateZ == conner to conner
  let rotationSpeed = 5;

  let scaleX = 0;
  let scaleY = 0;
  let scaleSpeed = 0.5;

  let timer = setInterval(play, 10);
  setTimeout(clearInterval, 300, timer)

  function play() {
    
    // if (degrees >= 50) {
    //   clearInterval(timer);
    // }
    // else{

      xPosition += moveSpeed;
      yPosition += moveSpeed;
      degrees += rotationSpeed;
      scaleX += scaleSpeed;
      scaleY += scaleSpeed;

      // boxToAnimate.style.top = `${yPosition}px`;
      // boxToAnimate.style.left = `${xPosition}px`;
      boxToAnimate.style.transform = `scale(${scaleX}, ${scaleY})`;
      // boxToAnimate.style.transform = `rotateZ(${degrees}deg)`;

    // }

  }

  startAnimationBtn.removeEventListener('click', playAnimation);

};

function resetAnimation() {
  
  boxToAnimate.style.top = null;
  boxToAnimate.style.left = null;
  boxToAnimate.style.transform = null;

  startAnimationBtn.addEventListener('click', playAnimation);

};