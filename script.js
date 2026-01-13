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

const campo = document.createElement("div")
campo.classList.add("campo")
campo.style.border = "1px solid black"
campo.style.display = "flex"
campo.style.flexDirection = "row"
campo.style.justifyContent = "center"
campo.style.whiteSpace = "pre-line"

botones.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let valor = e.target.value
        let computerSelection = getComputerChoice()
    })
})
   

container.appendChild(campo)

