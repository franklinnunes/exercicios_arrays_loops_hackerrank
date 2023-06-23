// const disparos = [0, 50, 90, 80, 100, 80, 40]
const disparos = [0, 10, 50, 70, 80, 30]

let contador = 0
for (let i = 0; i < disparos.length; i++) {
    if (disparos[i] >= 70) {
        contador++
    }
}


let pontos = 0
let aprovado = false
for (let disparo of disparos) {
    if (disparo >= 70 && contador >= 3) {
        aprovado = true
        pontos++
    }
}


if (!aprovado) {
    console.log('ELIMINADO')
} else {
    console.log(pontos)
}
