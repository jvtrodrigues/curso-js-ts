/**
 * Operadores lógicos
 * 
 * && -> and -> e -> todas expressões precisam ser verdadeiras para retornar true
 * || -> or -> ou -> se uma for verdade retorna true
 * ! -> not -> não -> inverte o valor 
 */
const expressaoAnd = true && true && false && true;
const expressaoOr = false || true || false || true;
console.log(expressaoAnd);
console.log(expressaoOr);

//ex de uso real
const usuario = 'José';
const senha = '123456';
const usuarioLoga = usuario === 'José' && senha === '123456';
console.log(usuarioLoga);
 
//negação
// quem ganhar ou quem perder nao vai nem ganhar ou perder
console.log(!!true == !false ? true : !true); 


