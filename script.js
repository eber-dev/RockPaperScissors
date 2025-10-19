let humanScore=0, computerScore=0

function getComputerChoice(){
    let opciones = Math.floor(Math.random()*3)+1
    switch(opciones){
        case 1:
            console.log("Computer selection: piedra")
            return "piedra"
        case 2:
            console.log("Computer selection: papel")
            return "papel"
        case 3:
            console.log("Computer selection: tijera")
            return "tijera"
    }
}

function getHumanChoice(){
    let ingreso = prompt("Ingrese piedra, papel o tijera").toLowerCase();
    console.log("Tu eleccion: ",ingreso)
    return ingreso
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice){
    switch(humanSelection){
        case "piedra":
            if(computerSelection === "piedra"){
                console.log("empate")
            }
            if(computerSelection === "papel"){
                console.log("pierdes")
            }
            if(computerSelection === "tijera"){
                console.log("ganas")
            }
            break;
        case "papel":
            if(computerSelection === "piedra"){
                console.log("ganas")
            }
            if(computerSelection === "papel"){
                console.log("empate")
            }
            if(computerSelection === "tijera"){
                console.log("pierdes")
            }
            break;
        case "tijera":
            if(computerSelection === "piedra"){
                console.log("pierdes")
            }
            if(computerSelection === "papel"){
                console.log("ganas")
            }
            if(computerSelection === "tijera"){
                console.log("empate")
            }
            break;
        default:
            console.log("La opcion ingresada no es correcta")
    }
}



playRound(humanSelection, computerSelection);

function playGame(){

}