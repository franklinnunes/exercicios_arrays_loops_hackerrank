//Perder mas perder o minimo
//caso compre a 20, deve vender a 15 ou 12 ou a 8 ou a 2
//caso compre a 15 deve vender a 12 ou a 8 ou a 2
// nunca comprar a 15 e vender a 20 por ex
//porem caso compre a 12, e no proximo ano vale 8, posso vender, nunca vender no passado
//o indice do array nesse ex funciona como os anos
//output deve ser a diferença da perda 
//ex: comprou a 5 e vendeu a 3: 5 - 3 = 2

//varrer todas as possibilidades de compra e venda
//ver, para cada um, se é prejuizo
//se for, anotar esse valor

//depois, ver qual foi o menor prejuizo


const precos = [20, 15, 8, 2, 12]

let menorPrejuizo = 999999999999
//compara 20 com 15, depos 15 com 8, depois 8 com 2, depois 2 com 12
for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {   //j sempre começa em i + 1, esse laço roda todo antes de voltar pro i
        const compra = precos[i]
        const venda = precos[j]
        const prejuizo = compra - venda

        if (prejuizo > 0) {
            //realmente prejuizo
            if (prejuizo < menorPrejuizo) {
                menorPrejuizo = prejuizo
            }
        }
    }
}
console.log(menorPrejuizo)