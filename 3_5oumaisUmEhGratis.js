//Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!
//Imprima na tela apenas um número que representa o total que deve ser pago pelo cliente (aplicando a promoção quando fizer sentido, claro).

const precos = [100, 500, 100, 200, 50]   //nesse caso o 50 sairia de graça!
//1 ver se tem promocao
//2 se nao tiver promocao: somar tudo - varrer o array somando o item atual ao total
//3 se tiver promocao
//  3.1 somar tudo
//  3.2 identificar o item mais barato
//  3.3 totalAPagar = soma - desconto

let valorAPagar = 0
let menorNumero = Math.min(...precos)    /// ... como se cada numero fosse uma variavel diferente
console.log(menorNumero)

for (let i = 0; i < precos.length; i++) {
    valorAPagar += precos[i]    // fazendo um laço que soma todos os itens do array
}

if (precos.length >= 5) {
    valorAPagar -= menorNumero   //soma de todos menos o menor numero
}
console.log(valorAPagar)









