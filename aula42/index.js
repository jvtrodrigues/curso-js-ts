//funcao que informa se uma imagem esta no modo paisagem atraves da largura e altura informada

const ePaisagem = (largura, altura) => largura >= altura;

console.log(ePaisagem(1080, 1940));
