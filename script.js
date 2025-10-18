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

