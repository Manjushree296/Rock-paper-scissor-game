window.addEventListener('DOMContentLoaded', (event) => {
    // Get all the elements from the HTML
    const userScoreElement = document.getElementById("user-score");
    const compScoreElement = document.getElementById("comp-score");
    const msgElement = document.getElementById("msg");

    const rockChoice = document.getElementById("rock");
    const paperChoice = document.getElementById("paper");
    const scissorChoice = document.getElementById("scissor");

    // Initialize scores
    let userScore = 0;
    let compScore = 0;

    // Array to store the choices
    const choices = ["rock", "paper", "scissor"];

    // Function to generate a random choice for the computer
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    // Function to determine the winner
    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (userChoice === "rock" && computerChoice === "scissor") ||
            (userChoice === "scissor" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "rock")
        ) {
            userScore++;
            return "You Win!";
        } else {
            compScore++;
            return "Computer Wins!";
        }
    }

    // Function to handle the user's choice
    function handleUserChoice(userChoice) {
        const computerChoice = getComputerChoice();
        
        // Display the choices
        msgElement.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}.`;
        
        // Determine the winner
        const resultMessage = determineWinner(userChoice, computerChoice);
        
        // Update the score
        userScoreElement.textContent = userScore;
        compScoreElement.textContent = compScore;
        
        // Display the result
        msgElement.textContent += ` ${resultMessage}`;
    }

    // Add event listeners to the choices
    rockChoice.addEventListener("click", () => handleUserChoice("rock"));
    paperChoice.addEventListener("click", () => handleUserChoice("paper"));
    scissorChoice.addEventListener("click", () => handleUserChoice("scissor"));
});
