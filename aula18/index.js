function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade
  };
}

const pessoas = [];

pessoas.push(criaPessoa('José', 'Rodrigues', 21));
pessoas.push(criaPessoa('João', 'Santos', 18));
pessoas.push(criaPessoa('Luiz', 'Rosa', 52));
pessoas.push(criaPessoa('Maria', 'Carvalho', 29));
pessoas.push(criaPessoa('Ana', 'Silva', 31));

pessoas.map(p => console.log(p));

// funcao dentro de objeto é chamada de método
const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,
  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando 'oi'...`);
    console.log(`A minha idade atual é ${this.idade} anos.`);
  },
  incrementaIdade() {
    this.idade++;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

