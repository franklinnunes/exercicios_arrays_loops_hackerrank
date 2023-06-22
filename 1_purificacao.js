//PURIFICAR DADOS - REMOCAO DE CARACTERES ESPECIAIS - !@#$%&*().
//1 - olhar cada um dos caracteres
//2 ver se pode o caractere em questao
//3 se for permitido, escrevo
//4 se nao for permitido, ignoro e olho o proximo
//5 quando acabarem os caracteres, é só exibir o que eu escrevi

const stringCorrompida = '*Canis %lupus )familiaris, Felis) silvestris *catus&, $Ailuropoda@ melanoleuca!'

let dado_purificado = ''

for (let caractere of stringCorrompida) {   //percorro cada caracter da string
    if (caractere === '*' || caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' || caractere === '%' || caractere === '&' ||
        caractere === '(' || caractere === ')' || caractere === '.') {
        //ignorar
    } else {
        //dado_purificado += dado_purificado + caractere
        dado_purificado += caractere
    }
}
console.log(dado_purificado)



