// document.addEventListener('click', function() {
//   document.body.style.backgroundColor = '#FF0';
// });


function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const p1 = criaPessoa('José', 'Rodrigues');
console.log(p1);


function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase('Olá');

console.log(olaMundo('mundo!'));

//ex de uso

function criaMultiplicador(multilicador) {
  return function (n) {
    return n * multilicador;
  }
}
//funcoes closure - lembra do escopo em que foi criada
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(12));