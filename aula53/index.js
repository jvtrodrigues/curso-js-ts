// Global
function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao('José');
const funcao2 = retornaFuncao('Vicente');

console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());

//closure é a habilidade da funcao em acessar o seu escopo lexico