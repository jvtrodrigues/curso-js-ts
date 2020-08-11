// a const deve ser inicializada SEMPRE
const nome = 'João';
console.log(nome);

// nem pode se alterar o valor da const
// nome = 'BATATA'; //erro

// + - * /  operadores
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
//o dobro
resultadoTriplicado*=2;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

// saber o tipo = typeof
console.log(typeof resultado);