var galleryItems = document.querySelectorAll('.gallery-item');
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');
var closeBtn = document.querySelector('.close');

// Abrir lightbox
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
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