 const button = document.querySelectorAll('.btn');
        let userMove;
        // Result Function
        button.forEach(btn => {
            btn.addEventListener('click', () => {
                userMove = btn.textContent;
                alert(`You have to chose ${btn.textContent} and Computer chose ${computerChoice()}.
                
                      Result is ${showResult()}`);
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
        