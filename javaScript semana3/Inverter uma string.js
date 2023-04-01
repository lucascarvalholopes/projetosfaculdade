// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Bruno Paiva Souza
// DATA: 01/04/2023
function inverterString(str) {
    let strInvertida = ""; // Cria uma variável vazia para armazenar a string invertida
    for (let i = 0; i < str.length; i++) { // Inicia um loop for a partir do primeiro caractere até o último
      strInvertida = str[i] + strInvertida; // Adiciona cada caractere da string original à variável da string invertida no início
    }
    return strInvertida; // Retorna a string invertida
  }
  const str = "JavaScript";
  const strInvertida = inverterString(str);
  console.log(`A string invertida é: ${strInvertida}`);
    