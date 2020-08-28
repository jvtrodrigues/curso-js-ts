const produto = { nome: 'Produto', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
  writable: false,
  configurable: false,
  value: 'Qualquer outra coisa'
});
//retorna as propriedades do atributo passado
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

produto.nome = 'Caneca';
// delete produto.nome;
// delete produto.preco; //apenas o preco deleta, pois o nome não é configuravel, conforme setado.
// console.log(produto);



//copiar.. spread é mais usado
//const caneca = {...produto, material: 'porcelana'};
//const caneca = Object.assign({}, produto, {material: 'porcelana'});
//tambem é possivel por desestruturação: const caneca = {nome: produto.nome, preco: produto.preco};
// caneca.nome = 'Caneca';
// caneca.preco = 2.5;
// //para 'congelar' o objeto
// Object.freeze(caneca);
// caneca.nome = 'Copo';
// //retorna as chaves: Object.keys(caneca);
// console.log(caneca);


console.log(Object.entries(produto));
console.log(Object.values(produto));

//itera no array das entradas
for(let [chave, valor] of Object.entries(produto)) {
  console.log(`${chave}: ${valor}`);
}

//ou
// for(let valor of Object.entries(produto)) {
//   console.log(`${valor[0]}: ${valor[1]}`);
// }
