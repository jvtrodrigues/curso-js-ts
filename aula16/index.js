// pode-se usar tipos diferentes, porém é recomendado apenas um tipo
const alunos = ['Luiz', 'Maria', 'João']; // string
//array é indexado por elemento
console.log(alunos[0][1]); // 2 letra dentro do primeiro elemento
console.log(alunos[2]);
alunos[0] = 'José'; // se o indice existe, altera o valor
console.log(alunos);
alunos[3] = 'Tomate'; //caso nao exista, um novo valor é adc
//porem deve-se saber o valor da ultima posição, uma forma é a seguinte:
alunos[alunos.length] = 'Cebola';
alunos.push('Vicente'); // metodo que add um novo elemento

//adiciona no inicio do array - unshift
alunos.unshift('Rodrigues');

//pop - remove do final
const removido = alunos.pop();

//outra forma delete alunos[indice] - nao altera os indices

console.log(alunos);
console.log(`O aluno removido foi: ${removido}`);

//shift remove do inicio
alunos.shift();
console.log(alunos);

//fatiar o array com slice
console.log(alunos.slice(0, -1));

//tipo 
console.log(typeof alunos);
