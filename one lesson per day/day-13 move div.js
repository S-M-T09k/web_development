const box = document.querySelector('.box');
const boxContainer = document.querySelector('#day-13');

let xPosition = 0;
let yPosition = 0;
let speed = 1;

boxContainer.addEventListener('keydown', moveX);
boxContainer.addEventListener('keydown', moveY);
boxContainer.addEventListener('keypress', resetBox)
boxContainer.addEventListener('keypress', changeSpeed);

boxContainer.addEventListener('keypress', showCords);

function moveX(event) {
  
  switch(event.key) {

    case "ArrowLeft":
    case "a":
      if (xPosition <= -250) {
        xPosition = -250;
        box.style.left = xPosition+"px";
        break;
      };
      xPosition -= speed;
      box.style.left = xPosition+"px";
      break;

    case "ArrowRight":
    case "d":
      if (xPosition >= 250) {
        xPosition = 250;
        box.style.left = xPosition+"px";
        break;
      };
      xPosition += speed;
      box.style.left = xPosition+"px";
      break;

    default:
      break;

  };

  ////console.log(xPosition, yPosition);
};

function moveY(event) {

  switch (event.key) {

    case "ArrowUp":
    case "w":
      if (yPosition <= -250) {
        yPosition = -250;
        box.style.top = yPosition+"px";
        break;
      };
      yPosition -= speed;
      box.style.top = yPosition+"px";
      break;

    case "ArrowDown":
    case "s":
      if (yPosition >= 250) {
        yPosition = 250;
        box.style.top = yPosition+"px";
        break;
      };
      yPosition += speed;
      box.style.top = yPosition+"px";
      break;

    default:
      break;

  };

  //// console.log(xPosition, yPosition);
};

function resetBox(event) {

  if (event.key == "q") {
    xPosition = 0;
    yPosition = 0;
    box.style.left = xPosition+"px";
    box.style.top  = yPosition+"px";
  }

};

function changeSpeed(event) {
  
  switch (event.key) {
    case "z":
      speed = 5;
      break;

    case "x":
      speed = 10;
      break;
    
    case "c":
      speed = 25;
      break;

    case "v":
      speed = 50;
      break;

    case "b":
      speed = 1;
      break;
  
    default:
      break;
  };

  //// console.log('speed :>> ', speed);
};

function showCords(event) {

  if (event.key == "m") {
    console.log(xPosition, yPosition);
  };
};