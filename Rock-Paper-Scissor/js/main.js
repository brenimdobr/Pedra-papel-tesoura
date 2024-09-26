import { Vitoria, conf } from "./poss.js"

const title = document.querySelector(".titulo");
const text = document.querySelector(".caixa-choice");
const choice = document.querySelector(".caixa-alternativas");
const results_box = document.querySelector(".caixa-resultado");
const results_text = document.querySelector(".texto-resultado");
const restart = document.querySelector(".Restart")
const back_menu = document.querySelector(".back_menu")


//sleep function
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

//botão restart
restart.addEventListener("click", () => {
    restart_game()
})


export function restart_game(){
    turn = 0
    turn_choice()
    restart.classList.add("display")
    back_menu.classList.add("display")
};

let turn = 0;

let Rock = "🪨"
let Paper = "📄"
let Scissor = "✂️"

export let choice_list = [Rock, Paper, Scissor]

export let jogadadobot

export let jogadadoplayer


function turn_choice() {
    if (turn == 0) {
        player()
    }
    if (turn == 1) {
        bot()
    }
    if (turn == 2){
        resultado()
    }
};

function player(){
    title.textContent = "Turno do jogador";
    text.textContent = "Escolha sua jogada para ganhar da maquína!";
    player_choice()
};


function player_choice() {
    for (const c of choice_list) {
        const button_choice = document.createElement("button");
        button_choice.textContent = c
        button_choice.addEventListener("click", () => jogadafeita(c))
        choice.appendChild(button_choice);
    }
};

function jogadafeita(jogada) {
    jogadadoplayer = jogada;
    turn++;
    turn_choice();
};

async function bot() {
    title.textContent = "Turno da máquina"
    text.textContent = "A máquina está pensando..."
    choice.textContent = ""
    
    await sleep(1000)
    turn++;
    turn_choice()

}

function botchoice(ops) {
    const i = Math.floor(Math.random() * ops.length)
    return ops[i]
}

function resultado(){
    jogadadobot = botchoice(choice_list)
    conf()
    title.textContent = "Resultado"
    text.textContent = "Empate"
    if (Vitoria) {
       text.textContent = "Parabéns, você ganhou!!!" 
    }
    if (Vitoria == false) {
        text.textContent = "Que pena, você perdeu!!!"
    }

    restart.classList.remove("display")
    back_menu.classList.remove("display")
    choice.textContent = ""
};



turn_choice()