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
const campo = document.querySelector(".campo")
const ronda = document.querySelector(".ronda")
const marcador = document.querySelector(".marcador")
const elecciones = document.querySelector(".elecciones")
const ilustracion = document.querySelector(".ilustracion")
const img = document.createElement("img")
const mensaje  = document.querySelector(".mensaje")

let contador = 1
let puntaje_humano = 0
let puntaje_pc = 0
let puntaje_jugadores = new Array(2)

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
        return "EL GANADOR FINAL ES PLAYER"
    }
    if(a[0]<a[1]){
        console.log(`PC: ${a[1]}`)
        console.log(`TU: ${a[0]}`)
        console.log("TU PIERDES")
        return "EL GANADOR FINAL ES PC"
    }

    if(a[0] == a[1]){
        return "NO HAY GANADOR ES UN EMPATE"
    }
}

botones.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let valor = e.target.value
        let computerSelection = getComputerChoice()
        let comparacion = comparar(valor,computerSelection)
        puntaje_jugadores = puntaje(comparacion)
        ronda.textContent = `RONDA: ${contador}`
        marcador.textContent =`PC: ${puntaje_pc}
        PLAYER: ${puntaje_humano}`
        elecciones.textContent =`Su eleccion es: ${valor}
        La eleccion de la Pc es: ${computerSelection}`
        img.src = "https://media.tenor.com/UA5nyBLYVnMAAAAM/henry-stickmin-rock-paper-scissors.gif"
        img.alt = "imagen"
        img.style.height = "260px"
        img.style.width = "auto"
        img.style.display = "block"
        img.style.marginInline = "auto"
        ilustracion.append(img)
        mensaje.textContent = `${comparacion} esta ronda`
        contador++
        if(contador >= 6){
            botones.forEach((btn)=>{
                btn.disabled=true
            })
            let ganador = final(puntaje_jugadores)
            img.src = "https://cdn.pixabay.com/animation/2024/04/14/02/43/02-43-38-360_512.gif"
            img.alt = "imagen finalizado"
            img.style.height = "260px"
            img.style.width = "auto"
            img.style.display = "block"
            img.style.marginInline = "auto"
            ilustracion.append(img)
            mensaje.textContent = `${ganador}`
        }
    })
})


