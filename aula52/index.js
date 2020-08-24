const nome = 'José Rodrigues';

//a funcao obedece o escopo que foi DECLARADO, buscando a variavel mais proxima
function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Vicente';
  falaNome();
}

usaFalaNome();