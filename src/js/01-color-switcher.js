const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;

startBtn.addEventListener('click', onStartColorSwitcher);
stopBtn.addEventListener('click', onStopColorSwitcher);

function onStartColorSwitcher() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
    timerId = setInterval(bodyColorSwitcher, 1000);
    
    bodyColorSwitcher();
    console.log('start: change color');
};

function onStopColorSwitcher() {
    startBtn.disabled = false;
    stopBtn.disabled = true;

    clearInterval(timerId);
    console.log('stop: change color')
};

function bodyColorSwitcher() {
    bodyEl.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
