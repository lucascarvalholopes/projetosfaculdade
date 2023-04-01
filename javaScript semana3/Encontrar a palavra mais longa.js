// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev:Lucas de carvalho Lopes
// DATA: 01/04/2023
function encontrarPalavraMaisLonga(frase) {
    let palavras = frase.split(' '); // separando as palavras da frase em um array
    let palavraMaisLonga = ''; // variável para armazenar a palavra mais longa
    for (let i = 0; i < palavras.length; i++) {
      if (palavras[i].length > palavraMaisLonga.length) {
        palavraMaisLonga = palavras[i];
      }
    }
    return palavraMaisLonga;
  }
  const frase = 'A raposa marrom rápida saltou sobre o cachorro preguiçoso.';
  const palavraMaisLonga = encontrarPalavraMaisLonga(frase);
  console.log(`A palavra mais longa é: ${palavraMaisLonga}`);
    