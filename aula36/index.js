//for in le os indices ou chaves (objeto)

const frutas = ['Pera', 'Laranja', 'Abacaxi'];

const pessoa = {
  nome: 'José',
  sobrenome: 'Rodrigues',
  idade: 21
}

for (let index in frutas) {
  console.log(frutas[index]);
}

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}