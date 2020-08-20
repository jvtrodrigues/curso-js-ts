const pessoa = {
  nome: 'José',
  sobrenome: 'Rodrigues'
};

//for classico - iteraveis (strings e arrays)
//for in - retorna o indice ou chave (strings, arrays, obejtos)
//for of - retorna o valor em si (strings, arrays, iteraveis)

for (let i in pessoa) {
  console.log(pessoa[i]);
}
//for of da problema pois o objeto nao tem indice

// const nomes = ['José', 'Vicente', 'Rodrigues'];

// for (let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }
// console.log('##########');
// for (let i in nomes) {
//   console.log(nomes[i]);
// }
// console.log('##########');
// for (let valor of nomes) {
//   console.log(valor);
// }
// console.log('##########');
// nomes.forEach(function (valor, indice) {
//   console.log(valor, indice);
//});
