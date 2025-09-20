 const button = document.querySelectorAll('.btn');
        let userMove;
        button.forEach(btn => {
            btn.addEventListener('click', () => {
                userMove = btn.textContent;
                alert(`You have to chose ${btn.textContent} and Computer chose ${computerChoice()}.
                
                      Result is ${showResult()}`);
            });
        });
       