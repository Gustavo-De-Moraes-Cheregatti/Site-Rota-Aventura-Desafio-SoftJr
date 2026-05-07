var imagemMenor = document.querySelectorAll('.imagem_menor');
var externaSobreposta = document.getElementById('externa_imagem_sobreposta');
var imagemMenorSobreposta = document.querySelectorAll('.imagem_menor_sobreposta');
var fechar = document.querySelector('.icone_fechar');

// Abrir sobreposição
imagemMenor.forEach(item => {
    item.addEventListener('click', () => {
        externaSobreposta.style.display = 'flex';
        imagemMenorSobreposta.src = item.src;
    });
});

// Fechar sobreposição no X
fechar.addEventListener('click', () => {
    externaSobreposta.style.display = 'none';
});

// Fechar sobreposição ao clicar no fundo (área externa)
externaSobreposta.addEventListener('click', (event) => {
    if (event.target.id === 'externa_imagem_sobreposta') {
        externaSobreposta.style.display = 'none';
    }
});

// Trocar a imagem Principal
function slider (anything) {
    document.querySelector ('.imagem_principal') .src = anything;
};