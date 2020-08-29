function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  //this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobrenome;
}

//instância
const pessoa1 = new Pessoa('José', 'R.');
const data = new Date();
const array1 = new Array();

console.dir(pessoa1);
console.dir(data);
console.dir(array1);