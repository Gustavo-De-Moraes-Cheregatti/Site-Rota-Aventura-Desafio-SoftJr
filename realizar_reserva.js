var dateInput = document.getElementById('input_data_realizar_reserva');          
//Criei uma variável (dateInput), ai ele vai no documento onde está o meu elemento com o id (input_data_realizar_reserva)

  dateInput.addEventListener('change', function() {            
    //Ele seleciona a variável (dateInput), e quando o evento de mudança acontece ->

    if (this.value) {                                                   //Se a mudança ocorrer mesmo (verdade) ->
      this.classList.remove('input_data_cinza_realizar_reserva');       //Remove a classe (input_data_cinza_realizar_reserva)
      this.classList.add('input_data_preto_realizar_reserva');          //Adiciona a classe (input_data_preto_realizar_reserva)
    } else {                                                            //Se a mudança não ocorrer (falso) ->
      this.classList.add('input_data_cinza_realizar_reserva');          //Adiciona a classe (input_data_cinza_realizar_reserva)
      this.classList.remove('input_data_preto_realizar_reserva');       //Remove a classe (input_data_preto_realizar_reserva)
    }
  });

  var dateInput = document.getElementById('input_data_2_realizar_reserva');  
  //Dupliquei e ajustei para o 2º quadrado, tive que ajustar pois 2 itens não podem ter o mesmo id

  dateInput.addEventListener('change', function() {
    if (this.value) {
      this.classList.remove('input_data_cinza_2_realizar_reserva');
      this.classList.add('input_data_preto_2_realizar_reserva');
    } else {
      this.classList.add('input_data_cinza_2_realizar_reserva');
      this.classList.remove('input_data_preto_2_realizar_reserva');
    }
  });

