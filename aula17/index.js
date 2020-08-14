function soma(x = 1, y = 1) { //possivel determinar um valor padrao para os parametros
  const resultado = x + y;
  return resultado; // a função para no RETURN
}
// as variaveis criadas no escopo da funcao NAO pode ser acessada
console.log(soma(3,2));

//outra forma de declarar função
const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));

// arrow function 
/*const raizCub = (n) => {
  return n ** (1/3);
};*/
//tambem pode se declarar em uma linha
const raizCub = n => n ** (1/3);

console.log(raizCub(8));