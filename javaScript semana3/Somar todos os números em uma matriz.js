// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Lucas de carvalho Lopes
// DATA: 01/04/2023
function somarMatriz(matriz) {
    let soma = 0;//Essa linha de código cria uma variável chamada soma e a inicializa com o
    // valor zero. Essa variável será utilizada para acumular a soma dos números da matriz.
    for (let i = 0; i < matriz.length; i++) {//Essa linha de código inicializa um loop for 
       // que irá iterar sobre as linhas da matriz fornecida como parâmetro para a função.
      for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];//Essa linha de código soma o valor 
        //do elemento da matriz localizado na linha i e coluna j ao acumulador soma.
      }
    }
    return soma;//Essa linha de código indica que a função somarMatriz() 
    //deve retornar o valor da variável soma, que foi acumulada durante o loop sobre a matriz.
  }
  