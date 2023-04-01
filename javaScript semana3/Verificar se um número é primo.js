// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Bruno Paiva Souza
// DATA: 01/04/2023
function verificarPrimo(num) {
    if (num < 2) { // Verifica se o número é menor que 2, pois os números primos são maiores ou iguais a 2
      return false; // Retorna falso caso o número seja menor que 2
    }
    for (let i = 2; i <= Math.sqrt(num); i++) { // Inicia um loop for de 2 até a raiz quadrada do número
      if (num % i === 0) { // Verifica se o número é divisível por algum número entre 2 e sua raiz quadrada
        return false; // Retorna falso caso o número seja divisível por outro número além de 1 e ele mesmo
      }
    }
    return true; // Retorna verdadeiro caso o número seja primo
  }
  const num = 17;
  const isPrimo = verificarPrimo(num);
  if (isPrimo) {
    console.log(`${num} é primo.`);
  } else {
    console.log(`${num} não é primo.`);
  }
  