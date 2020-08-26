function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
      this.capturaCliques();
      this.capturaEnter();
    };

    this.capturaEnter = () => {
      document.addEventListener('keyup', e => {
        if(e.keyCode === 13) {
          this.realizaConta();
        }
      });
    };

    this.realizaConta = () => {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if(!conta) {
          alert('Conta inválida');
          return;
        }
        this.display.value = conta;
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    };

    this.clearDisplay = () => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.capturaCliques = () => {
      document.addEventListener('click', event => {
        const el = event.target;
        
        if(el.classList.contains('btn-num')) this.addNumToDisplay(el);

        if(el.classList.contains('btn-clear')) this.clearDisplay();

        if(el.classList.contains('btn-del')) this.del();

        if(el.classList.contains('btn-eq')) this.realizaConta();
      });
    };

    this.addNumToDisplay = el => {
      this.display.value += el.innerText;
      this.display.focus();
    };
}

const calculadora = new Calculadora();
calculadora.inicia();


