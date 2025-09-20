 const button = document.querySelectorAll('.btn');
        let userMove;
        let score ={
            win:0,
            lose:0,
            tie:0
        };

        // Computer Choice Function 
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

        let ComputerMove;

        // Display Function
        button.forEach(btn => {
            btn.addEventListener('click', () => {
                userMove = btn.textContent;
                ComputerMove = computerChoice();

                // Display Choices and Score on the Screen
                let userChoice = document.querySelector('#user-choice');
                userChoice.textContent = `You Chose: ${btn.textContent}`;

                // Display Computer Choice on the Screen
                let computerChoiceDisplay = document.querySelector('#computer-choice');
                computerChoiceDisplay.textContent = `Computer Chose: ${ComputerMove}`;

                // Display Result on the Screen on each screen
                let showResult = document.querySelector('#show-result');
                showResult.textContent = gameResult();


                // Display Score on the Screen on each screen
                let userScore = document.querySelector('#show-score');
                userScore.textContent = `Score:  Wins ${score.win} , Losses ${score.lose} , Ties ${score.tie}`;    
            });
        });

        // Game Result Function
        function gameResult() {

            if (userMove === ComputerMove) {
                score.tie++;
                return "It's a Tie!";
            } else if (
                (userMove === "Bat" && ComputerMove === "Ball") ||
                (userMove === "Ball" && ComputerMove === "Stump") ||
                (userMove === "Stump" && ComputerMove === "Bat")
            ) { score.win++;
                return "You Win!";
            } else { score.lose++;
                return "Computer Wins!";
            }
        }
        
       

        
        