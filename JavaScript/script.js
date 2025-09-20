const button = document.querySelectorAll(".btn");
let userMove;
let ComputerMove;

// Display Function when user click the button Bat, Ball or Stump!
button.forEach((btn) => {
  btn.addEventListener("click", () => {
    userMove = btn.textContent;
    ComputerMove = computerChoice();

    // Display Choices and Score on the Screen
    let userChoice = document.querySelector("#user-choice");
    userChoice.textContent = `You Chose: ${btn.textContent}`;

    // Display Computer Choice on the Screen
    let computerChoiceDisplay = document.querySelector("#computer-choice");
    computerChoiceDisplay.textContent = `Computer Chose: ${ComputerMove}`;

    // Display Result on the Screen on each screen
    let showResult = document.querySelector("#show-result");
    showResult.textContent = gameResult();

    // Display Score on the Screen on each screen
    let userScore = document.querySelector("#show-score");
    userScore.textContent = `Score:  Wins ${score.win} , Losses ${score.lose} , Ties ${score.tie}`;
  });
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

// Game Result Function which also display the score and who win the game!

function gameResult() {
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
