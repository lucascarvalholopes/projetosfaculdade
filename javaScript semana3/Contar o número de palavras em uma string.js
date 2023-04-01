// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Bruno Paiva Souza
// DATA: 01/04/2023
function contarPalavras(str) {
    const palavras = str.trim().split(" "); // Remove os espaços em branco no início e no final da string e divide a string em um array de palavras
    return palavras.length; // Retorna o número de palavras no array
  }
  const str = "Esta é uma string de teste.";
  const numPalavras = contarPalavras(str);
  console.log(`O número de palavras na string é: ${numPalavras}`);
    