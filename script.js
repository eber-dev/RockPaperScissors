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
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice){
    switch(humanSelection){
        case "piedra":
            if(computerSelection === "piedra"){
                console.log("Tu seleccion: piedra")
                console.log("Computer selection: piedra")
                console.log("empate")
            }
            if(computerSelection === "papel"){
                console.log("Tu seleccion: piedra")
                console.log("Computer selection: papel")
                computerScore+=1
                console.log("pierdes")
            }
            if(computerSelection === "tijera"){
                console.log("Tu seleccion: piedra")
                console.log("Computer selecion: tijera")
                humanScore+=1
                console.log("ganas")
            }
            break;
        case "papel":
            if(computerSelection === "piedra"){
                console.log("Tu seleccion: papel")
                console.log("Computer selection: piedra")
                humanScore+=1
                console.log("ganas")
            }
            if(computerSelection === "papel"){
                console.log("Tu seleccion: papel")
                console.log("Computer selection: papel")
                console.log("empate")
            }
            if(computerSelection === "tijera"){
                console.log("Tu seleccion: papel")
                console.log("Computer selection: tijera")
                computerScore+=1
                console.log("pierdes")
            }
            break;
        case "tijera":
            if(computerSelection === "piedra"){
                console.log("Tu seleccion: tijera")
                console.log("Computer selection: piedra")
                computerScore+=1
                console.log("pierdes")
            }
            if(computerSelection === "papel"){
                console.log("Tu seleccion: tijera")
                console.log("Computer selection: papel")
                humanScore+=1
                console.log("ganas")
            }
            if(computerSelection === "tijera"){
                console.log("Tu seleccion: tijera")
                console.log("Computer selection: tijera")
                console.log("empate")
            }
            break;
        default:
            console.log("La opcion ingresada no es correcta")
    }
}

playRound(humanSelection,computerSelection)