function recursiva(max) {
  console.log(max);
  if(max >= 1000) return;
  max++;
  recursiva(max);
}

recursiva(0);

//funcao que se chama de volta