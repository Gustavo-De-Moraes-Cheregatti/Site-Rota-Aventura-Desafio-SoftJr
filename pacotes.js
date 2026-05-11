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

  function abrirModal(elemento) {
    var modal = document.getElementById("meuModal");
    var imgDestaque = document.getElementById("imgDestaque");
    var listaMiniaturas = document.getElementById("listaMiniaturas");
    
    modal.style.display = "flex";
    imgDestaque.src = elemento.src;
    
   
    var containerCard = elemento.closest('div').parentElement; 
    var todasAsImagens = containerCard.querySelectorAll('img');
    
    listaMiniaturas.innerHTML = "";
    
    todasAsImagens.forEach(function(img) {
        
        if(!img.classList.contains('wifi') && !img.classList.contains('wifi1')) {
            var novaMini = document.createElement("img");
            novaMini.src = img.src;
            novaMini.onclick = function() {
                imgDestaque.src = this.src;
            };
            listaMiniaturas.appendChild(novaMini);
        }
    });
}

function fecharModal() {
    document.getElementById("meuModal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("meuModal");
    if (event.target == modal) {
        fecharModal();
    }
}

function fecharModal() {
    document.getElementById("meuModal").style.display = "none";
}


window.onclick = function(event) {
    var modal = document.getElementById("meuModal");
    if (event.target == modal) {
        fecharModal();
    }
}