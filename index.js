const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548']

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const startBtn = document.querySelector('[data-action="start"]')

const stopBtn = document.querySelector('[data-action="stop"]')

let timeoutId = null

startBtn.addEventListener('click', onStartClick)
stopBtn.addEventListener('click', onStopClick)
const bodyColor = () => {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
}

function onStartClick() {
  timeoutId = setInterval(bodyColor, 1000)
  startBtn.disabled = true
}

function onStopClick() {
  clearInterval(timeoutId)
  startBtn.disabled = false
}
