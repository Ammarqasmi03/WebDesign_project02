let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let count = 0;
let isRunning = false;

function updateDisplay() {
    document.getElementById('hour').innerText = String(hours).padStart(2, '0');
    document.getElementById('minute').innerText = String(minutes).padStart(2, '0');
    document.getElementById('second').innerText = String(seconds).padStart(2, '0');
    document.getElementById('count').innerText = String(count).padStart(2, '0');
}

function start() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            count++;
            if (count >= 100) {
                count = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 10);
    }
}

function stop() {
    isRunning = false;
    clearInterval(timer);
}

function reset() {
    isRunning = false;
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    count = 0;
    updateDisplay();
}