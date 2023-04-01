// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Bruno Paiva Souza
// DATA: 01/04/2023
// A função bubbleSort recebe um array como argumento e retorna o array ordenado.
function bubbleSort(arr) {
    // A função começa definindo o comprimento da lista em uma variável len, e uma variável swapped para indicar se houve uma troca de elementos na última iteração.
    const len = arr.length;
    let swapped;
    // Em seguida, um loop do-while é iniciado, que continuará a executar enquanto houver trocas na lista. 
    do {
        // Dentro do loop, um loop for percorre os elementos da lista e compara elementos adjacentes. Se o elemento atual for maior que o próximo elemento, os elementos são trocados de posição e a variável swapped é definida como true.
        swapped = false;
        // Quando o loop for termina, se swapped ainda for true, significa que houve trocas na lista e o loop do-while precisa continuar. Se swapped for false, significa que a lista está totalmente ordenada e o loop do-while termina.
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    //Por fim, a função retorna o array ordenado. O código também inclui um exemplo de uso da função bubbleSort, onde um array é definido e ordenado usando a função, e o resultado é impresso no console.
    return arr;
}

// Exemplo de uso:
const arr = [5, 2, 8, 4, 1];
const sortedArr = bubbleSort(arr);
console.log(sortedArr); // [1, 2, 4, 5, 8]
    
  
  1