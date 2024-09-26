const bg_azul = document.querySelector(".bg-azul");
const bg_amarelo = document.querySelector(".bg-amarelo");
const bg_laranja = document.querySelector(".bg-laranja");
const bg_branco = document.querySelector(".bg-branco");
const bg_preto = document.querySelector(".bg-preto");

function background(URL){
    document.body.style.backgroundImage = URL;
}

bg_azul.addEventListener('click', () => {
    background('url("/imgs/azul.jpg")')
})

bg_amarelo.addEventListener('click', () => {
    background('url("/imgs/amarelo.png")')
})

bg_laranja.addEventListener('click', () => {
    background('url("/imgs/laranja.jpg")')
})

bg_branco.addEventListener('click', () => {
    background('url("/imgs/branco.webp")')
})

bg_preto.addEventListener('click', () => {
    background('url("/imgs/preto.jpg")')
})

background()