// Exercício 1

// function cubicSquare() {
//     let code = "";
//     for (i=1; i<=10; i++) {
//         code += `,${Math.pow(i, 3)}`;   
//     }
//     code = code.substring(1);
//     return code;
// }

// cubicSquare();

// console.log(cubicSquare());

// #####################################################

// Exercício 2

// function divisiblesFor(limitador, divisor) {
//     let retornaValor = "";
//     for (i=1; i<=limitador; i++) {
//         if (i%divisor == 0) {
//             retornaValor += `,${i}`;
//             //console.log(i);
//         }
//     }
//     retornaValor = retornaValor.substring(1);
//     return retornaValor;
// }

// console.log(divisiblesFor(100,10));

// #####################################################

// Exercício 3

// function stringElement(palavraUtilizada, posicaoProcurar) {
//     let letra = palavraUtilizada[posicaoProcurar];
//     while (letra == `${letra}`.toLowerCase()) {
//         let letraMaiuscula = letra.toUpperCase();
//         return letraMaiuscula;
//     }
// }

// console.log(stringElement("algorítmos",7));

// #####################################################

// Exercício 4

// function stringSlicer(palavraUtilizada, posicaoFinal) {
//     let nome = "";
//     for (i=0; i < posicaoFinal; i++) {
//         nome += palavraUtilizada[i];
//     }
//     return nome;
// }

// console.log(stringSlicer("ALGORÍTMOS", 4));

// #####################################################

// Exercício 5

// function stringRest(palavraUtilizada, posicaoInicial) {
//     let nome = "";
//     for (i=posicaoInicial; i < palavraUtilizada.length; i++) {
//         nome += palavraUtilizada[i];
//     }
//     return nome;
// }

// console.log(stringRest("ALGORÍTMOS", 2));

// #####################################################

// Exercício 6

// function countVowels(palavra) {
//     let letras = 0;
//     for (i=0; i < palavra.length; i++) {
//         if (`${palavra[i]}`.toLowerCase() == "a") {
//             letras++;
//         } if (`${palavra[i]}`.toLowerCase() == "e") {
//             letras++;
//         } if (`${palavra[i]}`.toLowerCase() == "i") {
//             letras++;
//         } if (`${palavra[i]}`.toLowerCase() == "o") {
//             letras++;
//         } else if (`${palavra[i]}`.toLowerCase() == "u") {
//             letras++;
//         }
//     }
//     return letras;
// }

// console.log (countVowels("abacaxi"));


// #####################################################

// Exercício 7

// function countTextOccurrences(texto, letra) {
//     contador = 0;
//     for (i=0; i<texto.length; i++) {
//         if (`${texto[i]}`.toLowerCase() == letra.toLowerCase()) {
//             contador++;
//         }
//     }
//     return contador;
// }

// let resultado = countTextOccurrences("Abacaxi", "a");
// console.log(resultado);

// #####################################################

// Exercício 8

// function textBackwards(texto) {
//     let nomeInverso = "";
//     for (i=texto.length-1; i >= 0; i--) {
//         nomeInverso += texto[i]; 
//     }
//     return nomeInverso;
// }

// console.log(textBackwards("abacaxi"));

// #####################################################

// Exercício 9

// function removeBlank(frase) {
//     let fraseSemEspaco = "";
//     for(i=0; i < frase.length; i++) {
//         if (frase[i] != " ") {
//             fraseSemEspaco += frase[i];
//         }
//     }
//     return fraseSemEspaco;
// }

// console.log(removeBlank("Não ficará   espaços em branco"));

// #####################################################

// Exercício 10

// function encryptText(frase) {

//     for (i=0; i < frase.length; i++) {
//         if ("A" == frase[i]) {
//             frase = frase.replace(frase[i], "X");
//         } else if ("a" == frase[i]) {
//             frase = frase.replace(frase[i], "x");
//         } 
        
//         if ("E" == frase[i]) {
//             frase = frase.replace(frase[i], "Y");
//         } else if ("e" == frase[i]) {
//             frase = frase.replace(frase[i], "y");
//         }
        
//         if ("I" == frase[i]) {
//             frase = frase.replace(frase[i], "W");
//         } else if ("i" == frase[i]) {
//             frase = frase.replace(frase[i], "w");
//         }

//         if ("O" == frase[i]) {
//             frase = frase.replace(frase[i], "K");
//         } else if ("o" == frase[i]) {
//             frase = frase.replace(frase[i], "k");
//         }

//         if ("U" == frase[i]) {
//             frase = frase.replace(frase[i], "Z");
//         } else if ("u" == frase[i]) {
//             frase = frase.replace(frase[i], "z");
//         }
//     }
//     return frase;
// }

// encryptText("Uma frase ultra secreta que precisa ser criptografada");


// ----------------------------------------------------------------------
// #### EXERCÍCIOS ABAIXO APENAS PARA MEU ESTUDO NÃO FAZ PARTE DA ENTREGA

// Exercício 3

// function stringElement(palavraUtilizada, posicaoProcurar) {
//     console.log(`${palavraUtilizada[posicaoProcurar]}`.toUpperCase());
// }

// stringElement("algorítmos",7);  

// #####################################################

// Exercício 4

// function stringSlicer(palavraUtilizada, posicaoFinal) {
//     let novaPalavra = `${palavraUtilizada.substring(0, posicaoFinal)}`;
//     console.log(novaPalavra);
// }

// stringSlicer("ALGORÍTMOS", 4);