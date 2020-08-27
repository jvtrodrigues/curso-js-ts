//Map altera o valor

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(numerosEmDobro);


//retornar apenas uma string com o nome da pessoa
//remover apenas a chave nome do obj
//adcionar uma chave id em cada obj
const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(pessoa => pessoa.nome);
const objSemNome = pessoas.map(pessoa => ({idade: pessoa.idade}));
const comIds = pessoas.map((pessoa, index) => {
  const novoObj = {...pessoa};
  novoObj.id = index;
  return novoObj;
});

console.log(nomes);
console.log(objSemNome);
console.log(comIds);
console.log(pessoas);

