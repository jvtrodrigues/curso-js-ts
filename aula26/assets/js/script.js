const form = document.querySelector('.form');

form.addEventListener('submit', function (evento) {
  {
    evento.preventDefault();
  
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');
  
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso || peso > 700 || peso < 10) {
      setResultado('Peso inválido!', true);
      return;
    } 
    
    if (!altura || altura > 3 || altura < 0.6) {
      setResultado('Altura inválida!', true);
      return;
    } 
    
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
  
    const msg = `Seu imc é ${imc} (${nivelImc}).`;
  
    setResultado(msg, false);
  }
});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9)  return nivel[5];
  if (imc >= 34.9)  return nivel[4];
  if (imc >= 29.9)  return nivel[3];
  if (imc >= 24.9)  return nivel[2];
  if (imc >= 18.5)  return nivel[1];
  if (imc < 18.5)  return nivel[0];
}

function getImc (peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, erro) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = '';
  const p = criaP();
  p.classList.add('paragrafo-resultado');
  if (erro) {
    p.classList.add('paragrafo-resultado-erro');
  } else {
    p.classList.add('paragrafo-resultado-certo');
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
}