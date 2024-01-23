//unimportant stuff
// console.log('cookies', document.cookie);

const stopWatch = document.querySelector('#stopWatch');
const TimeDisplay = stopWatch.querySelector('#timeDisplay_stopWatch');
const startBtn = stopWatch.querySelector('#startStopwatch');
const pauseBtn = stopWatch.querySelector('#pauseStopwatch');
const resetBtn = stopWatch.querySelector('#resetStopwatch');
const allTimerButtons = stopWatch.querySelectorAll('.timerButton');

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let stopWatchTimer;

startBtn.addEventListener('click', () => {
  if (paused) {

    paused = false;
    startTime = Date.now() - elapsedTime;
    stopWatchTimer = setInterval(updateTime, 50);

  }
});

pauseBtn.addEventListener('click', () => {
  if(!paused) {

    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(stopWatchTimer);

  }
});

resetBtn.addEventListener('click', () => {

  paused = true;
  clearInterval(stopWatchTimer);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  hours = 0;
  TimeDisplay.textContent = `00:00:00:00`;

});

function updateTime() {

  elapsedTime = Date.now() - startTime;

  milliseconds = Math.floor((elapsedTime / 10) % 100);
  seconds = Math.floor((elapsedTime / 1000) % 60);
  minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  milliseconds = pad(milliseconds);
  seconds = pad(seconds);
  minutes = pad(minutes);
  hours = pad(hours);

  TimeDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

  function pad(unit) {
    // console.log(unit, unit.length);
    if (("0" + unit).length > 2) {
      return unit;
    }
    else {
      // console.log("not");
      return "0" + unit;
    };
  };

};