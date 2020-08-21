const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// continue continua para a prox iteração
// break sai do laço

let i = 0;
while (i < numeros.length) {
  let numero = numeros[i];
  
  if (numero === 2) {
    console.log('Pulei o número 2');
    i++; // quando usar while ou do while, é necessario incrementar antes da palavra
    continue; //pula pra prox iteração do laço
  }
  
  console.log(numero);

  if (numero === 7) {
    console.log('7 encontrado, saindo...');
    i++;
    break; //quebra o laço
  }
  i++;
}