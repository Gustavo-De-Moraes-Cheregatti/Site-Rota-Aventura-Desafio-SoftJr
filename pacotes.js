var dateInput = document.getElementById('input-calendario');

dateInput.addEventListener('change', function() {            
    //Ele seleciona a variável (dateInput), e quando o evento de mudança acontece ->

    if (this.value) {                                                   //Se a mudança ocorrer mesmo (verdade) ->
      this.classList.remove('oinputCor-cinza');       //Remove a classe (input_data_cinza_realizar_reserva)
      this.classList.add('oinputCor-preto');          //Adiciona a classe (input_data_preto_realizar_reserva)
    } else {                                                            //Se a mudança não ocorrer (falso) ->
      this.classList.add('oinputCor-cinza');          //Adiciona a classe (input_data_cinza_realizar_reserva)
      this.classList.remove('oinputCor-preto');       //Remove a classe (input_data_preto_realizar_reserva)
    }
  });