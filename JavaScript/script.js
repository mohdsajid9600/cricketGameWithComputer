 const button = document.querySelectorAll('.btn');
        let userMove;
        // Result Function
        button.forEach(btn => {
            btn.addEventListener('click', () => {
                userMove = btn.textContent;
                alert(`You have to chose ${btn.textContent} and Computer chose ${computerChoice()}.
                
                      Result is ${gameResult()}`);
            });
        });
       // Computer Choice Function 
        function computerChoice() {
           let ComputerChoseRanNum = Math.floor(Math.random() * 3);
            console.log(ComputerChoseRanNum);
            if (ComputerChoseRanNum === 0) {
                return "Bat";
            } else if (ComputerChoseRanNum === 1) {
                return "Ball";
            } else {
                return "Stump";
            }
        }

        // Game Result Function
        let ComputerMove = computerChoice();
        function gameResult() {
            if (userMove === computerChoice) {
                return "It's a Tie!";
            } else if (
                (userMove === "Bat" && ComputerMove === "Ball") ||
                (userMove === "Ball" && ComputerMove === "Stump") ||
                (userMove === "Stump" && ComputerMove === "Bat")
            ) {
                return "You Win!";
            } else {
                return "Computer Wins!";
            }
        }
        