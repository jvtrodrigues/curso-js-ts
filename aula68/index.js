//Retorne a soma do dobro de todos os pares
//-> filtrar os pares
//-> dobrar os valores
//-> reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter(num => num % 2 === 0);

const dobroDosPares = numerosPares.map(num => num * 2);

const totalDobroPares = dobroDosPares.reduce((acm, valor) => acm + valor);

console.log(numerosPares);
console.log(dobroDosPares);
console.log(totalDobroPares);
