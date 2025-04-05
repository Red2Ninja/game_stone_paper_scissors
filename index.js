let player1 = '';
let player2 = '';
let rounds = 0;
let currentRound = 0;
let score1 = 0;
let score2 = 0;

function startGame() {
  player1 = document.getElementById("player1Name").value || "Player 1";
  player2 = document.getElementById("player2Name").value || "Player 2";
  rounds = parseInt(document.getElementById("roundsInput").value);

  if (isNaN(rounds) || rounds < 1) {
    alert("Please enter a valid number of rounds.");
    return;
  }

  document.querySelector(".setup").classList.add("hidden");
  document.querySelector(".game-area").classList.remove("hidden");

  document.getElementById("p1Label").innerText = player1;
  document.getElementById("p2Label").innerText = player2;

  document.getElementById("roundStatus").innerText = `Round 1 of ${rounds}`;
  document.getElementById("scoreDisplay").innerText = `Score: ${score1} - ${score2}`;
}

function playGame() {
    if (currentRound >= rounds) return;
  
    const choices = ["rock", "paper", "scissors"];
    let randomChoice1 = choices[Math.floor(Math.random() * 3)];
    let randomChoice2 = choices[Math.floor(Math.random() * 3)];
  
    document.querySelector(".img1").setAttribute("src", `images/${randomChoice1}_bg.png`);
    document.querySelector(".img2").setAttribute("src", `images/${randomChoice2}_bg.png`);
  
    const h1 = document.getElementById("main-heading");
  
    if (randomChoice1 === randomChoice2) {
      h1.innerText = "It's a draw!";
    } else if (
      (randomChoice1 === "rock" && randomChoice2 === "scissors") ||
      (randomChoice1 === "paper" && randomChoice2 === "rock") ||
      (randomChoice1 === "scissors" && randomChoice2 === "paper")
    ) {
      score1++;
      h1.innerText = `${player1} gets a point!`;
    } else {
      score2++;
      h1.innerText = `${player2} gets a point!`;
    }
  
    currentRound++;
  
    document.getElementById("scoreDisplay").innerText = `Score: ${score1} - ${score2}`;
  
    if (currentRound === rounds) {
      declareFinalWinner();
    } else {
      document.getElementById("roundStatus").innerText = `Round ${currentRound + 1} of ${rounds}`;
    }
  }
  

function declareFinalWinner() {
  const h1 = document.getElementById("main-heading");
  const finalWinnerEl = document.getElementById("final-winner");
  finalWinnerEl.classList.remove("hidden");

  if (score1 > score2) {
    h1.innerText = `🏆 ${player1} Wins the Game!`;
    finalWinnerEl.innerHTML = `<div class="trophy">🎉 Congratulations <span>${player1}</span>! You are the GRAND WINNER! 🏆</div>`;
  } else if (score2 > score1) {
    h1.innerText = `🏆 ${player2} Wins the Game!`;
    finalWinnerEl.innerHTML = `<div class="trophy">🎉 Congratulations <span>${player2}</span>! You are the GRAND WINNER! 🏆</div>`;
  } else {
    h1.innerText = "It's a Tie Game!";
    finalWinnerEl.innerHTML = `<div class="trophy">🤝 What a match! It's a LEGENDARY DRAW! 🌟</div>`;
  }
}
