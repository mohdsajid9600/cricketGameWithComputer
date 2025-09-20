 const button = document.querySelectorAll('.btn');
        let userMove;
        let score ={
            win:0,
            lose:0,
            tie:0
        }
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
                console.log(`From event listner `,userMove);
                console.log(`From event listner `,ComputerMove);
                alert(`You have to chose ${btn.textContent} and Computer chose ${ComputerMove}.
                
                      Result is ${gameResult()}
                     
                      ${score.win} Wins, ${score.lose} Losses, ${score.tie} Ties`
                    );
            });
        });

        // Game Result Function
        function gameResult() {
         console.log(`From gameresult funtion `, userMove, ComputerMove);
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
        
       

        
        