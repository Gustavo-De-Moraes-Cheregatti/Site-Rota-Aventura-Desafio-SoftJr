
//Inicio Carrosel Pacotes
var containerSlides = document.querySelector('.cards');
var btnNextDir = document.querySelector('.nextBtn');
var btnNextEsq = document.querySelector('.prevBtn');
var cardPac = document.querySelectorAll('.cardmain');

let indexPac = 0;

function carrosselPacotes(){
    const larguraCard = cardPac[0].offsetWidth;
    containerSlides.style.transform = `translateX(${-indexPac * larguraCard}px)`;
}

btnNextDir.addEventListener('click', () => {
    if(indexPac >= cardPac.length - 1){
        indexPac = 0;
    }else {
        indexPac++;
    }

    carrosselPacotes();
});

btnNextEsq.addEventListener('click', () => {
    if(indexPac <= 0){
        indexPac = cardPac.length -1;
    }else {
        indexPac--;
    }

    carrosselPacotes();
});
// Final Carrossel Pacotes


// Inicio Carrossel Hotel
var containerSlides2 = document.querySelector('.container2');
var btnNextDir2 = document.querySelector('.nextBtn2');
var btnNextEsq2 = document.querySelector('.prevBtn2');
var cardPac2 = document.querySelectorAll('.hotell');

let indexPac2 = 0;

function hotelPacotes(){
    const larguraCard2 = cardPac2[0].offsetWidth;
    containerSlides2.style.transform = `translateX(${-indexPac2 * larguraCard2}px)`;
}

btnNextDir2.addEventListener('click', () => {
    if(indexPac2 >= cardPac2.length - 1){
        indexPac2 = 0;
    }else {
        indexPac2++;
    }

    hotelPacotes();
});

btnNextEsq2.addEventListener('click', () => {
    if(indexPac2 <= 0){
        indexPac2 = cardPac2.length -1;
    }else {
        indexPac2--;
    }

    hotelPacotes();
});
//Fim carrossel Hotel

// inicio carrossel passeio mobile
var containerSlides3 = document.querySelector('.desp');
var btnNextDir3 = document.querySelector('.nextBtn3');
var btnNextEsq3 = document.querySelector('.prevBtn3');
var cardPac3 = document.querySelectorAll('.cardmain2');

let indexPac3 = 0;

function carroselPasseio(){
    const larguraCard3 = cardPac3[0].offsetWidth;
    containerSlides3.style.transform = `translateX(${-indexPac3 * larguraCard3}px)`;
}

btnNextDir3.addEventListener('click', () => {
    if(indexPac3 >= cardPac3.length - 1){
        indexPac3 = 0;
    }else {
        indexPac3++;
    }

    carroselPasseio();
});

btnNextEsq3.addEventListener('click', () => {
    if(indexPac3 <= 0){
        indexPac3 = cardPac3.length -1;
    }else {
        indexPac3--;
    }

    carroselPasseio();
});
// final carrossel passeio mobile

//inicio clickmenu

function clickMenu(){
    const esconder = document.getElementById('esconder');

    if(esconder.style.display == 'block'){
        esconder.style.display = 'none'
    }else{
        esconder.style.display = 'block'
    }
        
}

function clickMenu2(){
    const oi = document.getElementById('esconder2');

    if(esconder2.style.display == 'block'){
        esconder2.style.display = 'none'
    }else{
        esconder2.style.display = 'block'
    }
        
}
//final clickmenu


//inicio carrosel promocao
const carrosselProm = document.querySelectorAll('.fundo2');
const promocao = document.querySelector('.container3');
const totalCarrosel = carrosselProm.length;
let counter = 0;

function carroselPromocao(){
    counter++;
    if(counter === totalCarrosel){
        counter = 0;
    }

    let tamanhoItem = carrosselProm[0].clientWidth;

    let move = -counter * tamanhoItem;

        promocao.style.transform = `translateX(${move}px)`
}

setInterval(carroselPromocao, 3000);
//final carrosel promocao

//inicio enviaWhats

function enviarWhats(){
    let number = "5519993243013"

    let origem = document.getElementById('origem').value;
    let destino = document.getElementById('destino').value;
    let dataIda = document.getElementById('dataIda').value;
    let dataVolta = document.getElementById('dataVolta').value;
    let passagQuarto = document.getElementById('passagQuarto').value;

    let mensagem = `Ola! Tenho interesse em um pacote de viagens.\n\n`;

    mensagem += `*Origem: * ${origem}\n \n`;
    mensagem += `*Destino: * ${destino}\n \n`;
    mensagem += `*Ida: * ${dataIda}\n \n`;
    mensagem += `*Volta: * ${dataVolta}\n \n`;
    mensagem += `*Passageiros e Quartos* ${passagQuarto}`;

    let verMens = encodeURIComponent(mensagem);
    let urlWhats = `http://wa.me/${number}?text=${verMens}`;

    window.open(urlWhats, '_blank');
}

//finalWhats

