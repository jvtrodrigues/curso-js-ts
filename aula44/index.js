
function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser números.');
  }

  return x + y;
}

try {
  console.log(soma(5, 7));
  console.log(soma('a', 4));
} catch(err) {
  //console.log(err);
  console.log('Mensagem mais amigável.');
}