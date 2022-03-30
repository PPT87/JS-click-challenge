const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const score = document.getElementById('score')
const timeLeft = document.getElementById('time-left')

let result = 0

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')
}

function moveMole() {
  let timerID = null
  timerID = setInterval(randomSquare, 500)
}