//  ==============================================================   Quadrado 1

var imagemMenorQuadrado1 = document.querySelectorAll('.imagem_menor_quadrado_1');
var externaSobrepostaQuadrado1 = document.getElementById('externa_sobreposicao_quadrado_1_hoteis_populares');
var imagemMenorSobrepostaQuadrado1 = document.querySelectorAll('.imagem_menor_sobreposicao_quadrado_1_hoteis_populares');
var fecharQuadrado1 = document.querySelector('.icone_fechar_sobreposicao_quadrado_1_hoteis_populares');

// Abrir sobreposição
imagemMenorQuadrado1.forEach(item => {
    item.addEventListener('click', () => {
        externaSobrepostaQuadrado1.style.display = 'flex';
        imagemMenorSobrepostaQuadrado1.src = item.src;
    });
});

// Fechar sobreposição no X
fecharQuadrado1.addEventListener('click', () => {
    externaSobrepostaQuadrado1.style.display = 'none';
});

// Fechar sobreposição ao clicar no fundo (área externa)
externaSobrepostaQuadrado1.addEventListener('click', (event) => {
    if (event.target.id === 'externa_sobreposicao_quadrado_1_hoteis_populares') {
        externaSobrepostaQuadrado1.style.display = 'none';
    }
});

// Trocar a imagem Principal
function slider1 (anything) {
    document.querySelector ('.imagem_principal_sobreposicao_quadrado_1_hoteis_populares') .src = anything;
};

//  ==============================================================   Quadrado 2

var imagemMenorQuadrado2 = document.querySelectorAll('.imagem_menor_quadrado_2');
var externaSobrepostaQuadrado2 = document.getElementById('externa_sobreposicao_quadrado_2_hoteis_populares');
var imagemMenorSobrepostaQuadrado2 = document.querySelectorAll('.imagem_menor_sobreposicao_quadrado_2_hoteis_populares');
var fecharQuadrado2 = document.querySelector('.icone_fechar_sobreposicao_quadrado_2_hoteis_populares');

imagemMenorQuadrado2.forEach(item => {
    item.addEventListener('click', () => {
        externaSobrepostaQuadrado2.style.display = 'flex';
        imagemMenorSobrepostaQuadrado2.src = item.src;
    });
});

fecharQuadrado2.addEventListener('click', () => {
    externaSobrepostaQuadrado2.style.display = 'none';
});

externaSobrepostaQuadrado2.addEventListener('click', (event) => {
    if (event.target.id === 'externa_sobreposicao_quadrado_2_hoteis_populares') {
        externaSobrepostaQuadrado2.style.display = 'none';
    }
});

function slider2 (anything) {
    document.querySelector ('.imagem_principal_sobreposicao_quadrado_2_hoteis_populares') .src = anything;
};

//  ==============================================================   Quadrado 3

var imagemMenorQuadrado3 = document.querySelectorAll('.imagem_menor_quadrado_3');
var externaSobrepostaQuadrado3 = document.getElementById('externa_sobreposicao_quadrado_3_hoteis_populares');
var imagemMenorSobrepostaQuadrado3 = document.querySelectorAll('.imagem_menor_sobreposicao_quadrado_3_hoteis_populares');
var fecharQuadrado3 = document.querySelector('.icone_fechar_sobreposicao_quadrado_3_hoteis_populares');

imagemMenorQuadrado3.forEach(item => {
    item.addEventListener('click', () => {
        externaSobrepostaQuadrado3.style.display = 'flex';
        imagemMenorSobrepostaQuadrado3.src = item.src;
    });
});

fecharQuadrado3.addEventListener('click', () => {
    externaSobrepostaQuadrado3.style.display = 'none';
});

externaSobrepostaQuadrado3.addEventListener('click', (event) => {
    if (event.target.id === 'externa_sobreposicao_quadrado_3_hoteis_populares') {
        externaSobrepostaQuadrado3.style.display = 'none';
    }
});

function slider3 (anything) {
    document.querySelector ('.imagem_principal_sobreposicao_quadrado_3_hoteis_populares') .src = anything;
};