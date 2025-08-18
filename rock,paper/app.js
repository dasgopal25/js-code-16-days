

const button = document.getElementById('rollBtn')
button.addEventListener('click', (event) => {
    event.preventDefault();

    const display = ["ROCK", "PAPER", "SCISSORS"];
    let index = Math.floor(Math.random() * display.length);
    let index1 = Math.floor(Math.random() * display.length);

    const left = document.getElementById('left');
    left.innerHTML = display[index];

    const right = document.getElementById('right');
    right.innerHTML = display[index1];
    const result = document.getElementById('result');

    if (display[index] === display[index1]) 
        {
        result.innerHTML = "It's Draw!";
        result.style.color = "blue";
         
    }
    else if ((display[index] === "ROCK" && display[index1] === "SCISSORS") ||
            (display[index] === "PAPER" && display[index1] === "ROCK") ||
            (display[index] === "SCISSORS" && display[index1] === "PAPER") 
            )
    {
       
      result.innerHTML = "You Win!";
      result.style.color = "green";

      
    }
    else{
        result.innerHTML = "You Lose!";
        result.style.color = "red";
    }

})





// const choices = ["Rock", "Paper", "Scissors"];
// const leftDiv = document.getElementById("left");
// const rightDiv = document.getElementById("right");
// const result = document.getElementById("result");
// const rollBtn = document.getElementById("rollBtn");

// rollBtn.addEventListener("click", () => {
//     const playerChoice = choices[Math.floor(Math.random() * 3)];
//     const computerChoice = choices[Math.floor(Math.random() * 3)];

//     leftDiv.textContent = playerChoice;
//     rightDiv.textContent = computerChoice;

//     if (playerChoice === computerChoice) {
//         result.textContent = "It's a Draw!";
//         result.style.color = "orange";
//     } else if (
//         (playerChoice === "Rock" && computerChoice === "Scissors") ||
//         (playerChoice === "Paper" && computerChoice === "Rock") ||
//         (playerChoice === "Scissors" && computerChoice === "Paper")
//     ) {
//         result.textContent = "You Win! 🎉";
//         result.style.color = "green";
//     } else {
//         result.textContent = "You Lose! ❌";
//         result.style.color = "red";
//     }
// });
