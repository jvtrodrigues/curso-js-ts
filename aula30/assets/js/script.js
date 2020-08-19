// const resultado = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemana(data) {
//   return data.getDay();
// }

// function converteDiaParaTexto(diaSemana) {
//   const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
//   'quinta-feira', 'sexta-feira', 'sábado'];

//   return diasSemana[diaSemana];
// }

// function getDiaSemanaTexto(data) {
//   const diaSemana = getDiaSemana(data);
//   const diaSemanaTexto = converteDiaParaTexto(diaSemana);
//   return diaSemanaTexto;
// }

// function getDiaMes(data) {
//   return data.getDate();
// }

// function getMes(data) {
//   return data.getMonth();
// }

// function converteMesParaTexto(mes) {
//   const meses = ['janeiro', 'fevereiro', 'março', 'abril',
//   'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

//   return meses[mes];
// }

// function getMesTexto(data) {
//   const mes = getMes(data);
//   const mesTexto = converteMesParaTexto(mes);
//   return mesTexto;
// }

// function getAno(data) {
//   return data.getFullYear();
// }

// function setZeroAEsquerda(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function formataData(data) {
//   const hora = setZeroAEsquerda(data.getHours());
//   const min = setZeroAEsquerda(data.getMinutes());
//   return `${hora}:${min}`;
// }

// function montaResultado(data) {
//   const diaSemana = getDiaSemanaTexto(data);
//   const diaMes = getDiaMes(data);
//   const mesTexto = getMesTexto(data);
//   const ano = getAno(data);
//   const horaMin = formataData(data);
//   return `${diaSemana}, ${diaMes} de ${mesTexto} de ${ano} ${horaMin}`;
// }

// resultado.innerHTML = `${montaResultado(data)}`;

// //jeito mais simples..

const resultado = document.querySelector('.container h1');
const data = new Date();
resultado.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });

