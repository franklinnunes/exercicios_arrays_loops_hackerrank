//A sequencia vai no maximo de 0 a 6, passando o 6 volta pro indice 0
//imprima o numero inteiro correspondente 

//1 varrer a sequencia
//2 se for > soma 1
//2.1 se for < subtrai 1
//3 se indice for > 6, indice = 0
//3.1 se indice < 0, indice = 6

const sequencia = ['>', '>', '>', '<', '>', '<', '>', '>', '>']   //5

let indice = 0
for (let item of sequencia) {
    if (item === '>') {
        indice++    //soma 1
    } else {        //<
        indice--    //diminui 1
    }

    if (indice < 0) {      //forçando o programa a ficar dentro dos parametros desejados
        indice = 6
    } else if (indice > 6) {
        indice = 0
    }
}


console.log(indice)