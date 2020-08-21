// funcao que recebe um numero e retorna:
// divisivel por 3: Fizz
// divisivel por 5: Buzz
// divisivel por 3 e 5: FizzBuzz
// NAO é divisivel por 3 e 5: o numero
// se for um NaN: o numero
// usar função com numeros de 0 a 100

const fizzBuzz = n => {
  if(n % 3 === 0 && n % 5 !== 0) {
    return 'Fizz';
  } else if (n % 5 === 0 && n % 3 !== 0) {
    return 'Buzz';
  } else if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz';
  } else if (n % 3 !== 0 && n % 5 !== 0 || isNaN(n)) {
    return n;
  }
}
for (let i = 0; i <=100; i++) {
  console.log(i, fizzBuzz(i));
}