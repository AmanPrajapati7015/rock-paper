
// chose a random item from {rock, paper, scissor} for computer
function getComputerChoice(){
    a = Math.floor(Math.random() * 3);
    let compChoice = (a == 0)? "rock":(a == 1)? "paper": "scissor";
    return compChoice;
}



// convert result into message
function convertToMessage(result, userChoice, compChoice){
    let message = (result == "won")? `You won ! ${userChoice} beats ${compChoice}`:
                  (result =="lost")? `You lost ! ${compChoice} beats ${userChoice}`: `its a tie between ${compChoice} and ${userChoice}`;
    return message;
}


// check who beats whom
function getResult(compChoice, userChoice){
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
    return result;
}



let compLives = 5;
let userLives = 5; 

function play(userChoice){
    compChoice = getComputerChoice()
    let result = getResult(compChoice, userChoice);
    if (result == "lost"){
        userLives--
    }
    else if(result =="won"){
        compLives--
    }
    console.log(convertToMessage(result, userChoice, compChoice)) 
    
    console.log(`computer lives = ${compLives}`)
    console.log(`User lives = ${userLives}`)
    

//     if (userLives === 0 ){
//         console.log("YOU LOST")
//     }
//     else{
//         console.log("YOU WON")
//     }
}





const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");


rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissor.addEventListener("click", () => play("scissor"))