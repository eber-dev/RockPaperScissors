let humanScore=0, computerScore=0

function getComputerChoice(){
    let opciones = Math.floor(Math.random()*3)+1
    switch(opciones){
        case 1:
            return "piedra"
        case 2:
            return "papel"
        case 3:
            return "tijera"
    }
}

function getHumanChoice(){
    let ingreso = prompt("Ingrese piedra, papel o tijera").toLowerCase();
    return ingreso
}

function playRound(humanChoice, computerChoice){
    if(humanSelection && computerSelection == "tijera"){
        console.log("Empate")
    }
    if(humanSelection == "tijera" && computerSelection == "papel"){
        console.log("Tu ganas, Tijera vence al papel")
        humanScore+=1;
    } 
    if(humanSelection == "tijera" && computerSelection == "piedra"){
        console.log("Pierdes, Piedra vence a tijera")
        computerScore+=1;
    } 

    if(humanSelection == "piedra" && computerSelection == "piedra"){
        console.log("Empate")
    } 

    if(humanSelection == "piedra" && computerSelection == "tijera"){
        console.log("Tu ganas, Piedra vence a tijera")
        humanScore+=1;
    } 
    
    if(humanSelection == "piedra" && computerSelection == "papel"){
        console.log("Pierdes, Papel vence a piedra")
        computerScore+=1;
    }

    if(humanSelection == "papel" && computerSelection == "papel"){
        console.log("Empate")
    }

    if(humanSelection == "papel" && computerSelection == "piedra"){
        console.log("Tu ganas, Papel vence a piedra")
        humanScore+=1;
    }

    if(humanSelection == "papel" && computerSelection == "tijera"){
        console.log("Pierdes, Tijera vence a piedra")
        computerScore+=1;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
