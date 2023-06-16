// Get the stopwatch elements
const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let startTime;
let stopwatchInterval;

function startStopwatch() {
  startTime = Date.now();
  stopwatchInterval = setInterval(updateStopwatch, 10);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  stopStopwatch();
  display.textContent = '00:00:00';
}

function updateStopwatch() {
  const currentTime = Date.now() - startTime;
  const seconds = Math.floor(currentTime / 1000) % 60;
  const minutes = Math.floor(currentTime / 1000 / 60) % 60;
  const hours = Math.floor(currentTime / 1000 / 60 / 60);

  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return number.toString().padStart(2, '0');
}

// Event listeners for buttons
startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
