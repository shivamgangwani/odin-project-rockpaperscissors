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
            else if(computerSelection === "Scissors") {
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
            else if(computerSelection === "Scissors") {
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
            else if(computerSelection == "Scissors") {
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

let round_number = 1;
let game_on = true;
let scores = {
    "player" : 0,
    "computer" : 0
};

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".game_choice").forEach( function(el) {
        el.addEventListener("click", function(event) {
            if(game_on) {
                let playerChoice = capitalize(el.getAttribute("choice"));
                game(playerChoice);

                round_number += 1;

                if(scores['player'] == 5 || scores['computer'] == 5) {
                    game_on = false;
                    document.querySelector("#final_result").innerHTML = (scores['player'] == 5 ? "Player" : "Computer");
                }
            }
        });
    });
});


function game(playerSelection) {

    // Play a round
    let computerChoice = computerPlay();
    let result = playRound(playerSelection, computerChoice);

    // Update result rows
    let result_row = document.createElement("tr");

    let row_round = document.createElement("td");
    row_round.innerHTML = round_number;

    let row_pChoice = document.createElement("td");
    row_pChoice.innerHTML = playerSelection;

    let row_cChoice = document.createElement("td");
    row_cChoice.innerHTML = computerChoice;

    let row_roundResult = document.createElement("td");
    row_roundResult.innerHTML = map_outcome(result, playerSelection, computerChoice);


    result_row.appendChild(row_round);
    result_row.appendChild(row_pChoice);
    result_row.appendChild(row_cChoice);
    result_row.appendChild(row_roundResult);

    result_body.appendChild(result_row);
    

    // Update scores
    scores['player'] += (result === 2) ? 1 : 0;
    scores['computer'] += (result === 0) ? 1 : 0;
    // Update scores table
    document.querySelector("#player_score").innerHTML = scores['player'];
    document.querySelector("#computer_score").innerHTML = scores['computer'];
}