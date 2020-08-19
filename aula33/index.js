const pessoa = {
  nome: 'José',
  sobrenome: 'Rodrigues',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

//atribuição via desestruturação
const { nome, sobrenome, idade, endereco: {rua} } = pessoa;
console.log(sobrenome);
console.log(rua);


const { nome2, ...resto} = pessoa;

console.log(resto);