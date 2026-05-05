var galeriaItems = document.querySelectorAll('.galeria-item');
var lightbox = document.getElementById('lightbox');
var lightboxImg1 = document.getElementById('lightbox-img1');
var lightboxImg2 = document.getElementById('lightbox-img2');
var lightboxImg3 = document.getElementById('lightbox-img3');
var lightboxImg4 = document.getElementById('lightbox-img4');
var closeBtn = document.querySelector('.close');

// Abrir lightbox
galeriaItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg1.src = item.src;
    });
});

// Fechar lightbox no X
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Fechar ao clicar fora da imagem
lightbox.addEventListener('click', (and) => {
    if (and.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});