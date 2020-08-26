// // filter -> sempre retorna um array com a mesma quantidade de elementos ou menos

// //retornar numeros maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numeroFiltrados = numeros.filter(valor => valor > 10);
// console.log(numeroFiltrados);

//retornar
// nome com 5 letras ou mais
// mais de 50 anos
// nome termina com a
const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(p => p.nome.length >= 5);
const pessoasComMaisDe50 = pessoas.filter(p => p.idade > 50);
const pessoasNomeTermA = pessoas.filter(p => p.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDe50);
console.log(pessoasNomeTermA);
