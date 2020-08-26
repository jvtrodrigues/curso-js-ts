const nomes = ['José', 'Maria', 'Joana'];
const novo = [...nomes];
nomes[2] = 'João';
delete nomes[2];
const removido = novo.shift(); //pop() final
nomes.push('Jean');
nomes.unshift('Paula'); //add no começo

//fatiar..
const novo2 = nomes.slice(1, 3);

// console.log(nomes.length);
// console.log(novo);
// console.log(novo2);
// console.log(nomes);
// console.log(removido)

const nome = 'José Vicente Rodrigues';
const nomesSeparados = nome.split(' ');
const juntandoNovamente = nomesSeparados.join(' ');
console.log(nomesSeparados);
console.log(juntandoNovamente)