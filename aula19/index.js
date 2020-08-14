
/**
 * Tipos de dados:
 * primitivos -  (string, number, boolean, 
 * undefined, null, bigint, symbol) - copiados
 * referencia - MUTAVEIS (array, object, function) - referenciados
 */
let a = 'A';
let b = a; //copia

console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

//referencia, se o valor for afetado, isso é replicado na referencia
let x = [1, 2, 3];
let y = x; //copiar: let y = [...x];

console.log(x, y);

x.push(4);

console.log(x, y);

//com objeto
const pessoa = {
  nome: 'José',
  sobrenome: 'Rodrigues'
};

const pessoaRef = pessoa;
/**
 * Forma de fazer copia:
 * const pessoaRef = {...pessoa};
 */
pessoa.nome = 'Vicente';
console.log(pessoaRef);