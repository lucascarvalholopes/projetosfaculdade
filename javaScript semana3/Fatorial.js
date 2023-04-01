// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Lucas de carvalho Lopes
// DATA: 01/04/2023
function fatorial(num) {
    let resultado = 1; // Inicializa o resultado como 1
    if (num < 0) { // Verifica se o número é negativo
      return "O fatorial de números negativos não é definido"; // Retorna uma mensagem de erro caso o número seja negativo
    } else { // Caso o número seja positivo ou zero
      for (let i = 1; i <= num; i++) { // Executa um loop for de 1 até o número informado pelo usuário
        resultado *= i; // Multiplica o resultado pelo número atual do loop
      }
      return resultado; // Retorna o resultado final do fatorial
    }
  }
  const num = 7;
  const resultado = fatorial(num);
  console.log(`O fatorial de ${num} é ${resultado}`);
    