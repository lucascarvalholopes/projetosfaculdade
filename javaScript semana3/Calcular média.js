// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Lucas de carvalho Lopes
// DATA: 01/04/2023
function calcularMedia(numeros) {
    let soma = 0; // variável para armazenar a soma dos números
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i]; // somando cada número do array na variável soma
    }
    return soma / numeros.length; // calculando e retornando a média
  }
  const numeros = [5, 7, 10, 2];
  const media = calcularMedia(numeros);
  console.log(`A média dos números é: ${media}`);
    