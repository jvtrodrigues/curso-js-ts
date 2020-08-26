// Funcao construtora -> objetos
// Funcao fábrica -> objetos
// Construtora -> Pessoa(new)

function Pessoa(nome, sobrenome) {
  //Privadas
  const ID = 123456;
  const metodoInterno = function() {

  };

  //Atributos ou metodos publicos, podem ser acessados pela notacao ponto de fora da funcao
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': sou um método');
  };
}

const p1 = new Pessoa('José', 'Rodrigues');
const p2 = new Pessoa('Maria', 'Silva');

p2.metodo();