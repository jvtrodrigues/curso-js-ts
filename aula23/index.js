console.log('José Rodrigues' && 0 && 'Maria');

/**
 * falso - false
 * Falsy em js
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 * 
 * qualquer coisa diferente disso é true
 */

console.log('Luiz' && 'Maria'); // pega o ultimo valor do true
// no caso do false, pegar o primeiro dentro da expressao e para de comparar, já que é um AND

function falaOi () {
  return 'Oi';
}

const vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi());

// no caso do OR, a comparacao encerra quando encontra um true e retorna o valor
console.log(0 || false || null || 'José Rodrigues' || true);

//ex de uso
const corUsuario = '#F00';
const corPadrao = corUsuario || '#333';
console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // esse retorna
const d = false;
const e = NaN;

console.log(a || b || c || d || e);