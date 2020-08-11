/**
 * José Vicente Rodrigues tem 21 anos, pesa 95kg
 * tem 1.8 de altura e seu IMC é de ??
 * José Vicente Rodrigues nasceu em 1998.
 */

 const nome = 'José Vicente';
 const sobrenome = 'Rodrigues';
 const idade = 22;
 const peso = 95;
 const alturaEmM = 1.80;
 let imc;
 imc = peso / (alturaEmM * alturaEmM);
 let anoNascimento;
 anoNascimento = 2020 - idade;

 console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg,`);
 console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}.`);
 console.log(`${nome} nasceu em ${anoNascimento}.`);
