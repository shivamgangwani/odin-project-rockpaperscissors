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

    // player_win records whether player won, lost or tied
    // player_win takes 3 values: 0, 1, 2
    // 0 -> loss, 1 -> tie, 2 -> win
    let player_win = 0;

    // Format arguments correctly
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

    // Game logic
    switch(playerSelection) {

        case "Rock": 
            if(computerSelection == "Rock") {
                player_win = 1; // Tie
            }
            else if(computerSelection == "Paper") {
                player_win = 0; // Loss
            }
            else if(computerSelection == "Scissor") {
                player_win = 2; // Win
            }
            break;

        case "Paper":
            if(computerSelection == "Rock") {
                player_win = 2; // Win
            }
            else if(computerSelection == "Paper") {
                player_win = 1; // Tie
            }
            else if(computerSelection == "Scissor") {
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

    // Map outcome to text
    let result = map_outcome(player_win, computerSelection, playerSelection);

    return result;
}

function capitalize(str) {
    // Helper function
    // Returns modified str with first character in uppercase and remaining str in lowercase
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function map_outcome(outcome, computerSelection, playerSelection) {
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