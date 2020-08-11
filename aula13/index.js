
// uma string é indexada, ou seja, palavra[2] = 'l' ou palavra.charAt(2) = 'l' !charCodeAt!
let umaString = "Um \"texto\" qualquer"; // escapar o caractere de aspas assim // concat


console.log(umaString);

console.log(umaString.concat(' hoje', ' escrevi assim'));

//indexOf informa onde inicia um texto
console.log(umaString.indexOf('qualquer'));

//parametro que informa de onde iniciar
console.log(umaString.indexOf('Um', 3)); //retorna -1 quando não encontra

//lastIndexOf - busca iniciando pelo final

// replace - replace(\r\g, 'x');

// slice(indice, indFinal-oInformado) - corta 

//split retorna um array separado no caractere informado


