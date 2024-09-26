import { jogadadoplayer, jogadadobot, choice_list } from "./main.js"

export let Vitoria

export function conf() {
    if (jogadadoplayer == choice_list[0]) {
        if (jogadadobot == choice_list[1]) {
            Vitoria = false
        }
        if (jogadadobot == choice_list[2]) {
            Vitoria = true
        }
    }
    
    if (jogadadoplayer == choice_list[1]) {
        if (jogadadobot == choice_list[0]) {
            Vitoria = true
        }
        if (jogadadobot == choice_list[2]) {
            Vitoria = false
        }
    }
    
    if (jogadadoplayer == choice_list[2]) {
        if (jogadadobot == choice_list[0]) {
            Vitoria = false
        }
        if (jogadadobot == choice_list[1]) {
            Vitoria = true
        }
    }
}