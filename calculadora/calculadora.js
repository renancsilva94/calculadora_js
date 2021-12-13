function calculadora(){

  const operador = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));

  // Erro de operação
  if (!operador || operador>=7){
    alert('ERROR-operação invalida');
    calculadora();
  }else{

// variaveis de entrada
let n1 = Number(prompt('digite o primeiro valor'));
let n2 = Number(prompt('digite o segundo valor'));
let resultado;

//funções das operações
  function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
    novaOperacao();
  }
  function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
    novaOperacao();
  }
  function multiplicacao() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
    novaOperacao();
  }
  function divisaoReal() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
    novaOperacao();
  }
  function divisaoInteira() {
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
    novaOperacao();
  }
  function  potencia() {
    resultado = n1 ** n1 ;
    alert(`${n1} ** ${n2} = ${resultado}`);
    novaOperacao();
  }

  // repetição da rotina de operação
  function novaOperacao(){
    let opcao = prompt('\n deseja calcular novamente? \n 1-SIM \n 2-NÃO');

    if (opcao == 1){
      calculadora();
    }else if (opcao == 2) {
      alert('Até mais, Muito Obrigado');
    }else {
      alert('Digite uma opção valida');
      novaOperacao();
    }
  }


// decisãoes de operações com If/else
if (operador == 1) {
  soma();
} else if (operador == 2){
  subtracao();
} else if (operador == 3){
  multiplicacao();
} else if (operador == 4){
  divisaoReal();
} else if (operador == 5){
  divisaoInteira();
} else if (operador == 6){
  potencia();


// decisão de operações com switch case
  switch (operador) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potencia();
                break;
        }
      }
    }
}  
calculadora();
