// (condicao) ? 'se der true' : 'se der false'
const pontuacaoUsuario = 1999;
const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Verde';
console.log(nivelUsuario, corPadrao);

