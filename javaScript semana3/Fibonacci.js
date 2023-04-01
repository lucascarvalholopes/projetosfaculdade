// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Lucas de carvalho Lopes
// DATA: 01/04/2023
function fibonacci(n) {
    if (n < 1) { // Verifica se o número é menor que 1
      return "O número deve ser maior ou igual a 1."; // Retorna uma mensagem de erro caso o número seja menor que 1
    } else { // Caso o número seja maior ou igual a 1
      const fibonacciSerie = [0, 1]; // Inicializa a série de Fibonacci com os primeiros 2 números
      for (let i = 2; fibonacciSerie[i - 1] + fibonacciSerie[i - 2] <= n; i++) {
        // Inicia o loop for a partir do terceiro número da série de Fibonacci, enquanto a soma do último e penúltimo número for menor ou igual ao limite superior n
        fibonacciSerie[i] = fibonacciSerie[i - 1] + fibonacciSerie[i - 2]; // Adiciona o próximo número da série de Fibonacci na array
      }
      return fibonacciSerie; // Retorna a série de Fibonacci até o número n
    }
  }
  const n = 13;
  const fibonacciSerie = fibonacci(n);
  console.log(`Série de Fibonacci até ${n}: ${fibonacciSerie}`);
    