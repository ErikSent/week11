const timerDisplay = document.querySelector('#timer');
const stopBtn = document.querySelector('button');

let seconds = 0;

const timer = setInterval(() => {
    timerDisplay.innerHTML = seconds + ' seconds ';
    seconds++; //seconds = seconds + 1

}, 1000)


stopBtn.addEventListener('click', ()=> {
    clearInterval(timer);
});
