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
let contador = 1
let puntaje_humano = 0
let puntaje_pc = 0
let puntaje_jugadores = new Array(2)

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
                console.log("empate")
                return "empate";
            }
            if(b == "Papel"){
                console.log("Pierdes")
                return "Pierdes"
            }
            if(b == "Tijera"){
                console.log("Ganas")
                return "Ganas"
            }
            break
        case "Papel":
            if(b == "Papel"){
                console.log("empate")
                return "empate"
            }
            if(b == "Piedra"){
                console.log("Ganas")
                return "Ganas"
            }
            if(b == "Tijera"){
                console.log("Pierdes")
                return "Pierdes"
            }
            break
        case "Tijera":
            if(b == "Tijera"){
                console.log("empate")
                return "empate"
            }
            if(b == "Papel"){
                console.log("Ganas")
                return "Ganas"
            }
            if(b == "Piedra"){
                console.log("Pierdes")
                return "Pierdes"
            }
            break
        default:
            console.log("No se reconocio la eleccion")
    }
}

function puntaje(a){
    switch(a){
        case "Ganas":
            puntaje_humano++
            console.log(`El Score humano es: ${puntaje_humano}`)
            break
        case "Pierdes":
            puntaje_pc++
            console.log(`El Score pc es: ${puntaje_pc}`)
            break
        case "empate":
            console.log(`El Score humano es: ${puntaje_humano}`)
            console.log(`El Score pc es: ${puntaje_pc}`)
            break
    }
    return [puntaje_humano,puntaje_pc]   
}

function final(a){
    if(a[0]>a[1]){
        console.log(`PC: ${a[1]}`)
        console.log(`TU: ${a[0]}`)
        console.log("TU GANAS")
    }
    if(a[0]<a[1]){
        console.log(`PC: ${a[1]}`)
        console.log(`TU: ${a[0]}`)
        console.log("TU PIERDES")
    }
}

botones.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let valor = e.target.value
        let computerSelection = getComputerChoice()
        let comparacion = comparar(valor,computerSelection)
        puntaje_jugadores = puntaje(comparacion)
        console.log(`Ronda ${contador}`)
        contador++
        if(contador >= 6){
            botones.forEach((btn)=>{
                btn.disabled=true
            })
            final(puntaje_jugadores)
        }
    })
})


   

container.appendChild(campo)

