function getComputerChoice(){
    let opciones = Math.floor(Math.random()*3)+1
    switch(opciones){
        case 1:
            return "Piedra"
        case 2:
            return "Papel"
        case 3:
            return "Tijera"
    }
}

const container = document.querySelector(".container")
const botones = document.querySelectorAll(".btn")
let contador

const campo = document.createElement("div")
campo.classList.add("campo")
campo.style.border = "1px solid black"
campo.style.display = "flex"
campo.style.flexDirection = "row"
campo.style.justifyContent = "center"
campo.style.whiteSpace = "pre-line"

function comparar(a,b){
    switch(a){
        case "Piedra":
            if(b == "Piedra"){
                return "empate";
            }
            if(b == "Papel"){
                return "Pierdes"
            }
            if(b == "Tijera"){
                return "Ganas"
            }
            break
        case "Papel":
            if(b == "Papel"){
                return "empate"
            }
            if(b == "Piedra"){
                return "Ganas"
            }
            if(b == "Tijera"){
                return "Pierdes"
            }
            break
        case "Tijera":
            if(b == "Tijera"){
                return "empate"
            }
            if(b == "Papel"){
                return "Ganas"
            }
            if(b == "Piedra"){
                return "Pierdes"
            }
            break
        default:
            console.log("No se reconocio la eleccion")
    }
}

botones.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let valor = e.target.value
        let computerSelection = getComputerChoice()
    })
})


   

container.appendChild(campo)

