//some todos os números (reduce)
//retorne um array com os pares(filter)
//retorne um array com o dobro dos valores(map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
  acumulador += valor;
  return acumulador;
}, 0);

const pares = numeros.reduce(function(acumulador, valor) {
  if(valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);

const dobro = numeros.reduce(function(acumulador, valor) {
  acumulador.push(valor *2);
  return acumulador;
}, []);

console.log(total);
console.log(pares);
console.log(dobro);

//retorne a pessoa mais velha
const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 64},
  {nome: 'Wallace', idade: 47},
];

const maisVelho = pessoas.reduce(function(acumulador, obj) {
  if(acumulador.idade > obj.idade) return acumulador;
  return obj;
});

console.log(maisVelho);