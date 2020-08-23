// declaracao de funcao (function hoisting)

falaOi();
function falaOi() {
  console.log('Oie');
}

//função é first-class objects (objetos de primeira classe)
//function expression
//funcao como dado

const souUmDado = function () {
  console.log('Sou um dado.');
};

function executaFuncao(funcao) {
  console.log('Vou executar sua função abaixo:');
  funcao();
}

executaFuncao(souUmDado);

//arrow function - mais curta

const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};

funcaoArrow();

const obj = {
  falar() {
    console.log('Estou falando...');
  }
};

obj.falar();