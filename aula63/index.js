const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//nomes.splice(indice, delete, elem1, elem2)
//pop
//const removidos = nomes.splice(-1, 1);
//shift
//const removidos = nomes.splice(0, 1);
//push
//nomes.splice(nomes.length, 0, 'Vicente');
//unshift
nomes.splice(0, 0, 'Vicente');
console.log(nomes);
//console.log(removidos);