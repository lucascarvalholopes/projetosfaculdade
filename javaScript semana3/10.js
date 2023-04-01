// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Lucas de carvalho lOPES
// DATA: 01/04/2023
function calcularFatorial(n) {
    if (n === 0 || n === 1) { // caso base
      return 1;
    } else { // caso recursivo
      return n * calcularFatorial(n-1);
    }
  }
  