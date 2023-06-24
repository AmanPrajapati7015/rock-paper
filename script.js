
// chose a random item from {rock, paper, scissor} for computer
function getComputerChoice(){
    a = Math.floor(Math.random() * 3);
    let compChoice = (a == 0)? "rock":(a == 1)? "paper": "scissor";
    return compChoice;
}



// take one input form user 
function getUserChoice(){
    b = prompt("Choose from {rock, paper, scissor}");
    return b.toLowerCase();
}

// check who beats whom
function play(compChoice, userChoice){
    let result;
    if (userChoice == "rock"){
        result = (compChoice == "paper") ? "lost":(compChoice == "scissor")? "won":"tie";
    }
    else if (userChoice == "paper"){
        result = (compChoice == "scissor") ? "lost":(compChoice == "rock")? "won":"tie";
    }
    else if (userChoice == "scissor"){
        result = (compChoice == "rock") ? "lost":(compChoice == "paper")? "won":"tie";
    }
    else{
        console.error("invalid input by user");
    }

    let message = (result == "won")? `You won ! ${userChoice} beats ${compChoice}`:
                  (result =="lost")? `You lost ! ${compChoice} beats ${userChoice}`: `its a tie between ${compChoice} and ${userChoice}`;
    
    console.group(result);              
    console.log(message);

    return result;
}

let compLives = 5;
let userLives = 5; 
while (compLives>0 && userLives>0){
    let result = play(getComputerChoice(), getUserChoice());
    if (result == "lost"){
        userLives--
    }
    else if(result =="won"){
        compLives--
    }
    console.log(`computer lives = ${compLives}`)
    console.log(`User lives = ${userLives}`)
    console.groupEnd();
}

if (userLives === 0 ){
    console.log("YOU LOST")
}
else{
    console.log("YOU WON")
}



