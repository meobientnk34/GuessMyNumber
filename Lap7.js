//
const secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".number").textContent = "?";
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When no input
  if (!guess) {
    document.querySelector(".message").textContent = " ⛔️ No number!";
    //when you win
  } else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    highscore = Math.max(highscore, score);
    document.querySelector(".highscore").textContent = highscore;
    //when guess too high
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
    } else {
      document.querySelector(".message").textContent = "📈 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
    score--;
    document.querySelector(".score").textContent = score;
    //when guess too low
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too low!";
    } else {
      document.querySelector(".message").textContent = "📈 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
    score--;
    document.querySelector(".score").textContent = score;
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Again
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
