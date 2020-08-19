// let a = 'A'; //B
// let b = 'B'; //C
// let c = 'C'; //A

// const letras = [b, c, a];
// [a, b, c] = letras; //atribuição via desestruturação

// console.log(a, b, c);

// é indexado 
// const numeros = [123234, 2423423, 345345, 4345345, 5345345, 6435345, 734543, 834545, 9435345];
// const [primeiroNumero, segundoNumero, , , quintoNumero, ...resto] = numeros; //pega o resto do array desestruturado
// //tambem é possivel pular valores com uma virgula

// //...rest, ...spread - espalhar
// console.log(primeiroNumero, segundoNumero, quintoNumero);
// console.log(resto);

//mais complexo

const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const [lista1, lista2, lista3] = numeros;

console.log(lista3[2]);