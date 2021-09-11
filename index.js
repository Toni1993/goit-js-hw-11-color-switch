const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548']

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const startBtn = document.querySelector('[data-action="start"]')

const stopBtn = document.querySelector('[data-action="stop"]')

console.log(stopBtn)

let timeoutId = null

startBtn.addEventListener('click', onStartClick)
stopBtn.addEventListener('click', onStopClick)

function onStartClick() {
  timeoutId = setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 6)]
  }, 1000)
}

function onStopClick() {
  clearInterval(timeoutId)
}
