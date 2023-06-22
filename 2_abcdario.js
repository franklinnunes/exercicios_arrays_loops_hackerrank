//imprima o numero inteiro de palavras que nao começam com a letra da variavel letra

const letra = 'm'
const palavras = ['mamao', 'maca', 'melao', 'melancia', 'laranja', 'pera']

let erros = 0

for (let palavra of palavras) {
    const primeiraLetra = palavra[0]   //tenho que criar uma variavel que armazene o indice 0 de cada palavra

    if (primeiraLetra !== letra) {    //se a primeira letra for diferente da letra
        erros++       //contabiliza 1
    }
}
console.log(erros);