const button = document.querySelectorAll(".btn");
let userMove;
let computerMove;
let updateResult;

// Update your button click handler to save last game
button.forEach((btn) => {
  btn.addEventListener("click", () => {
    userMove = btn.textContent;
    computerMove = computerChoice();
    updateResult = updateGameResult();
    displayResult(userMove, computerMove, updateResult); // Display after each move
    saveLastGame(userMove, computerMove, updateResult); // Save after each move
  });
});

// Display Result Function to show the result of the game and choices made by user and computer!
function displayResult(userMove, computerMove, result) {
  document.querySelector("#user-choice").textContent = `You Chose: ${userMove}`;
  document.querySelector("#computer-choice").textContent = `Computer Chose: ${computerMove}`;
  document.querySelector("#show-result").textContent = result;
  document.querySelector("#show-score").textContent = `Score:  Wins ${score.win} , Losses ${score.lose} , Ties ${score.tie}`; // Update UI
}

// Function to display after reset button is clicked (If needed in future)
function displayAfterReset() {
  document.querySelector("#show-score").textContent = `Score:  Wins ${score.win} , Losses ${score.lose} , Ties ${score.tie}`; // Update UI
  document.querySelector("#show-result").textContent = " Make Your Move!";
  document.querySelector("#user-choice").textContent = " ";
  document.querySelector("#computer-choice").textContent = " ";
  
}

// Save last game data to localStorage after each move
function saveLastGame(userMove, computerMove, result) {
  localStorage.setItem(
    "LastGame",
    JSON.stringify({
      userMove,
      computerMove,
      result,
    })
  );
}

// On page load, display last game if available
window.addEventListener("DOMContentLoaded", () => {
  const lastGame = localStorage.getItem("LastGame");
  if (lastGame) {
    const { userMove, computerMove, result } = JSON.parse(lastGame);
    displayResult(userMove, computerMove, result);
  } else {
    displayAfterReset(); // Display default message if no last game
  }
});

// Score Keeping using Local Storage to keep the score even after refreshing the page!
let localScore = localStorage.getItem("ScoreData");
let score = localScore
  ? JSON.parse(localScore)
  : {
      win: 0,
      lose: 0,
      tie: 0,
    };

// Reset Button Functionality to reset the score and clear the local storage data!
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  score = {
    win: 0,
    lose: 0,
    tie: 0,
  };
  displayAfterReset(); // Call function to update UI after reset
});

// Computer Choice Function which randomly choose between Bat, Ball and Stump!
function computerChoice() {
  let computerChoseRanNum = Math.floor(Math.random() * 3);
  if (computerChoseRanNum === 0) {
    return "Bat";
  } else if (computerChoseRanNum === 1) {
    return "Ball";
  } else {
    return "Stump";
  }
}

// Update Game Result Function which also display the score and who win the game!
function updateGameResult() {
  let result;
  if (userMove === computerMove) {
    score.tie++;
    result = "It's a Tie!";
  } else if (
    (userMove === "Bat" && computerMove === "Ball") ||
    (userMove === "Ball" && computerMove === "Stump") ||
    (userMove === "Stump" && computerMove === "Bat")
  ) {
    score.win++;
    result = "You Win!";
  } else {
    score.lose++;
    result = "Computer Wins!";
  }

  localStorage.setItem("ScoreData", JSON.stringify(score)); // Update after score changes
  return result;
}
