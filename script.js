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