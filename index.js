const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.getElementById("score");
const timeLeft = document.getElementById("time-left");

let result = 0;
let hitPosition;
let timerID = null;
let currentTime = 60

//randomly selecting a square and removing/adding class of 'mole'
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  //making hitPosition the same as the 'mole' for scoring
  hitPosition = randomSquare.id;
}

//to accumulate score when clicking on mole
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

//moving mole randomly at 1000ms
function moveMole() {
  timerID = setInterval(randomSquare, 700);
}

moveMole();

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime == 0){
    clearInterval(countDownTimerId)
    clearInterval(timerID)
    alert(`GAME OVER! FINAL SCORE: ${result}`)
  }
}

let countDownTimerId = setInterval(countDown, 1000)