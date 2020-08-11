const num = Number(prompt('Informe o número'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num;
texto.innerHTML = `<p>Raiz quadrada: ${num ** 0.5}</p>`;
texto.innerHTML += `<p>${num} é inteiro? ${Number.isInteger(num) ? 'sim' : 'não'}</p>`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(num) ? 'sim' : 'não'}</p>`;
texto.innerHTML += `<p>Arredondado pra baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Arredondado pra cima: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`;

