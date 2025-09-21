const button = document.querySelectorAll(".btn");
let userMove;
let ComputerMove;
let updateResult;


// Update your button click handler to save last game
button.forEach((btn) => {
  btn.addEventListener("click", () => {
    userMove = btn.textContent;
    ComputerMove = computerChoice();  
    updateResult = updateGameResult();
    displayResult(userMove, ComputerMove, updateResult); // Display after each move
    saveLastGame(userMove, ComputerMove, updateResult); // Save after each move
  });
});


// Display Result Function to show the result of the game and choices made by user and computer!
function displayResult(userMove, ComputerMove, result) {
  document.querySelector("#user-choice").textContent = `You Chose: ${userMove}`;
  document.querySelector("#computer-choice").textContent = `Computer Chose: ${ComputerMove}`;
  document.querySelector("#show-result").textContent = result;
  document.querySelector("#show-score").textContent = `Score:  Wins ${score.win} , Losses ${score.lose} , Ties ${score.tie}`; // Update UI

}

// Save last game data to localStorage after each move
function saveLastGame(userMove, ComputerMove, result) {
  localStorage.setItem("LastGame", JSON.stringify({
    userMove,
    ComputerMove,
    result
  }));
}

// On page load, display last game if available
window.addEventListener("DOMContentLoaded", () => {
  const lastGame = localStorage.getItem("LastGame");
  if (lastGame) {
    const { userMove, ComputerMove, result } = JSON.parse(lastGame);
    displayResult(userMove, ComputerMove, result);
  } else {
    displayResult("", "", "Make Your Move!");
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
  document.querySelector("#show-score").textContent = `Score:  Wins ${score.win} , Losses ${score.lose} , Ties ${score.tie}`; // Update UI
  document.querySelector("#show-result").textContent = " Make Your Move!";
  document.querySelector("#user-choice").textContent = " ";
  document.querySelector("#computer-choice").textContent = " ";
});

// Computer Choice Function which randomly choose between Bat, Ball and Stump!
function computerChoice() {
  let ComputerChoseRanNum = Math.floor(Math.random() * 3);
  if (ComputerChoseRanNum === 0) {
    return "Bat";
  } else if (ComputerChoseRanNum === 1) {
    return "Ball";
  } else {
    return "Stump";
  }
}

// Update Game Result Function which also display the score and who win the game!
function updateGameResult() {
  let result;
    if (userMove === ComputerMove) {
        score.tie++;
        result = "It's a Tie!";
    } else if (
        (userMove === "Bat" && ComputerMove === "Ball") ||
        (userMove === "Ball" && ComputerMove === "Stump") ||
        (userMove === "Stump" && ComputerMove === "Bat")
    ) {
        score.win++;
        result = "You Win!";
    } else {
        score.lose++;
        result = "Computer Wins!";
    }
    
    localStorage.setItem('ScoreData', JSON.stringify(score)); // Update after score changes
    return result;
}
