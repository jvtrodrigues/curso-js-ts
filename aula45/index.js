// try {
//   //exc quando NAO ha erros
//   console.log('Abri um arquivo');
//   console.log('Manipulei o arquivo e gerou um erro');
// } catch (e) {
//   //exc quando HA erros
//   console.log('Tratando o erro..');
// } finally {
//   //sempre exc
//   console.log('Fechei o arquivo');
// }

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if(!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora();
  console.log(hora);
} catch (err) {
  //tratar erro
} finally {
  console.log('Tenha um bom dia');
}