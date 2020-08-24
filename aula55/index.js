//IIFE -> Immediately invoked function expression
// function qualquerCoisa() {
//   console.log(231434);
// }
// qualquerCoisa();

//protege o escopo global
(function(idade, peso, altura) {
  const sobrenome = 'Rodrigues';

  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('José'));
  }

  falaNome();
  console.log(idade, peso, altura);
})(21, 95, 1.80);

//deve estar dentro dos parenteses. quando concluir chamar os parenteses.
