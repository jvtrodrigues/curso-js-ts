
// funcao com a palavra 'function' tem uma variavel especial
//chamada 'arguments' que sustenta todos argumentos enviados

const conta = (...args) => {
  console.log(args);
};

conta('*', 1, 20, 30, 40, 50);