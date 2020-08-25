// Factory function (Função fábrica)
// Contructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome, 
    sobrenome,
    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto = 'nada') {
      return `${this.nome} está falando sobre ${assunto}.`; //neste caso this se refere ao obj
    },
    altura: a,
    peso: p,
    //Getter trata a funcao imc() como um atributo
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('José', 'Rodrigues', 1.80, 95);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('café'));