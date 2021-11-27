// TOP: Project - Rock Paper Scissors

function computerPlay() {
    // Randomly returns "Rock", "Paper" or "Scissor"
    let outcome = "None";

    // Generate a random integer from the set {1, 2, 3}
    let rand_x = Math.floor((Math.random() * 3) + 1);
    
    // Assign these cases to game outcomes
    switch(rand_x) {
        case 1:
            outcome = "Rock";
            break;

        case 2:
            outcome = "Paper";
            break;

        case 3:
            outcome = "Scissors";
            break;
    }
    return outcome;
}


function playRound(playerSelection, computerSelection) {
    // Plays one round of Rock Paper Scissors

    // Returns player_win, which records whether player won, lost or tied
    // player_win takes 3 values: 0, 1, 2
    // 0 -> loss, 1 -> tie, 2 -> win
    let player_win = 0;

    // Format arguments correctly
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

    // Game logic
    switch(playerSelection) {

        case "Rock": 
            if(computerSelection === "Rock") {
                player_win = 1; // Tie
            }
            else if(computerSelection === "Paper") {
                player_win = 0; // Loss
            }
            else if(computerSelection === "Scissor") {
                player_win = 2; // Win
            }
            break;

        case "Paper":
            if(computerSelection === "Rock") {
                player_win = 2; // Win
            }
            else if(computerSelection === "Paper") {
                player_win = 1; // Tie
            }
            else if(computerSelection === "Scissor") {
                player_win = 0; // Loss
            }
            break;

        case "Scissors":
            if(computerSelection == "Rock") {
                player_win = 0; // Loss
            }
            else if(computerSelection == "Paper") {
                player_win = 2; // Win
            }
            else if(computerSelection == "Scissor") {
                player_win = 1; // Tie
            }
            break;
    }

    // 0 if lost, 1 if tied, 2 if won
    return player_win;
}

function capitalize(str) {
    // Helper function
    // Returns modified str with first character in uppercase and remaining str in lowercase
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function map_outcome(outcome, playerSelection, computerSelection) {
    // Helper function
    // Maps outcome to text
    // Outcome can be 0 (loss), 1 (tie), 2 (win)
    let result;
    if(outcome === 0) {
        // Player lost
        result = `You lost! ${computerSelection} beats ${playerSelection}`;
    }

    else if(outcome === 1) {
        //Player tied
        result = `You tied! ${computerSelection} ties ${playerSelection}`;
    }

    else if(outcome === 2) {
        // Player won
        result = `You won! ${playerSelection} beats ${computerSelection}`;
    }
    return result;
}


function game() {
    // Play 5 rounds of Rock Paper Scissors
    let score = 0;

    let wins = 0,
        ties = 0,
        losses = 0;

    for(let i = 1; i <= 5; i++) {
        // Play a round
        
        // Ask player for their play
        let playerSelection = prompt(`Round ${i} : Rock, Paper or Scissors? `);
        let computerSelection = computerPlay();

        // Get result
        let result = playRound(playerSelection, computerSelection);

        // Show the result
        console.log("----------------");
        console.log(`Round ${i} result`);
        console.log(`You played ${playerSelection}`);
        console.log(`Computer played ${computerSelection}`);
        console.log(map_outcome(result, playerSelection, computerSelection));
        
        // Show score after current round
        score += result;
        console.log(`Your current score: ${score}`);
        console.log("----------------");

        // Update wins, ties and losses tally
        wins += (result === 2) ? 1 : 0;
        ties += (result === 1) ? 1 : 0;
        losses += (result === 0) ? 1 : 0;
    }

    // End of game result
    console.log("----------------");
    console.log("Game over!");
    console.log(`Your score: ${score}`);
    console.log("Total games: 5");
    console.log(`Games won: ${wins}`);
    console.log(`Games tied: ${ties}`);
    console.log(`Games lost: ${losses}`);
    console.log("----------------");
}