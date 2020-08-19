// const verdadeira = true;

// //let tem escopo de bloco
// //var só tem escopo de função

// let nome = 'José';
// var nome2 = 'vicente';

// if (verdadeira) {
//   let nome = 'Nome dentro do escopo';
//   console.log(nome, nome2);

//   if (verdadeira) {
//     let nome = 'Outra coisa';
//     console.log(nome);
//   }
// }

// var sobrenome = 'Rodrigues';

// function falaOi () { //function protege suas variaveis
//   console.log(sobrenome);
// }

// falaOi();

console.log(sobrenome);

var sobrenome = 'Rodrigues'; // hoisting - usando var, a engine eleva a declaracao para o inicio sem apresentar erro. usando funções isso tambem ocorre
//isso foi corrigico com o let