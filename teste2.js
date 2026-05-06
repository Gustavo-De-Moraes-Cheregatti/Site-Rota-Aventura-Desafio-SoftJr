var imagemMenor = document.querySelectorAll('.imagem_menor');
var externaSobreposta = document.getElementById('externa_imagem_sobreposta');
var imagemMenorSobreposta = document.querySelectorAll('.imagem_menor_sobreposta');
var fechar = document.querySelector('.icone_fechar');

// Abrir lightbox
imagemMenor.forEach(item => {
    item.addEventListener('click', () => {
        externaSobreposta.style.display = 'flex';
        imagemMenorSobreposta.src = item.src;
    });
});

// Fechar lightbox no X
fechar.addEventListener('click', () => {
    externaSobreposta.style.display = 'none';
});

externaSobreposta.addEventListener('click', (event) => {
    if (event.target===this) {
        alert('clicou na maior');
    } else {
        alert('clicou na menor');
    }
});

// Trocar a imagem Principal
function slider (anything) {
    document.querySelector ('.imagem_principal') .src = anything;
};