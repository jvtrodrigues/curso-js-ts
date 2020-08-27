// const pessoa = {
//   nome: 'José',
//   sobrenome: 'Rodrigues'
// };

// for(let atributo in pessoa) {
//   console.log(atributo, pessoa[atributo]);
// }

// //construtor
// const outraPessoa = new Object();
// outraPessoa.nome = 'Vicente';
// outraPessoa.sobrenome = 'Rodrigues';
// outraPessoa.idade = 21;
// outraPessoa.falarNome = function(){
//   return (`${this.nome} está falando seu nome.`);
// };
// outraPessoa.getDataNascimento = function () {
//   const dataAtual = new Date();
//   return  dataAtual.getFullYear() - this.idade;
// }

// for(let chave in outraPessoa) {
//   console.log(outraPessoa[chave]);
// }

//factory function / constructor function / Classes

// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     get nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     }
//   };
// }

// const p1 = criaPessoa('José', 'Rodrigues');
// console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this); //nao pode alterar o valor dos atributos
}

// {} <- this 
const p1 = new Pessoa('José', 'Rodrigues');
p1.nome = 'Vicente';
delete p1.nome;
console.log(p1);