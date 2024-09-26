import { restart_game } from './main.js'

//Menus
const main_game = document.querySelector(".game");
const configs = document.querySelector(".config");
const main_menu = document.querySelector(".menu");

//botões
const btn_start = document.querySelector(".start-btn");
const btn_config = document.querySelector(".config-btn");
const btn_voltar = document.querySelector(".btn-voltar");
const btn_menu = document.querySelector(".back_menu")


//start
btn_start.addEventListener('click', () => {
    in_game()
    main_menu.classList.add("display")
})

//config
btn_config.addEventListener('click', () => {
    in_config()
    main_menu.classList.add("display")
    main_game.classList.add("display")
})

//botões de voltar ao menu
btn_voltar.addEventListener('click', () => {
    back_menu()
})

btn_menu.addEventListener('click', () => {
    back_menu()
    restart_game()
})


//menu
btn_start.addEventListener('click', () => {
    in_game()
    main_menu.classList.add("display")
})



function in_menu(){
    main_menu.classList.remove("display")
};

function in_game(){
    main_game.classList.remove("display")
};

function in_config(){
    configs.classList.remove("display")
};

function back_menu(){
    in_menu()
    configs.classList.add("display")
    main_game.classList.add("display")
}


in_menu();