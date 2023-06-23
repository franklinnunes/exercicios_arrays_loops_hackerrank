//Você deve imprimir na tela as palavras contidas no array de palavras que tem como primeira letra a primeiraLetra 
//fornecida na entrada e a segunda letra a segundaLetra fornecida na entrada. Imprima uma palavra em cada linha.
//Caso não nenhuma palavra do array de palavras atenda aos requisitos, imprima na tela NENHUMA.

const primeiraLetra = 'a'
const segundaLetra = 'v'
let palavras = ['aveia', 'manha', 'ave']


let palavraSelecionada = false

for (let palavra of palavras) {
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
        palavraSelecionada = true
        console.log(palavra)
    }
}

if (!palavraSelecionada) {
    console.log('NENHUMA');
}


