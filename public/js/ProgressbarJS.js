/*
    Autor: Louis Grümmer nachträgliches Refactoring mit Benjamin McDougall.
    Inspiration: https://www.youtube.com/watch?v=gR8gb_wWEnY
 */


import {Projekt} from "./projekt/domain/projekt.js";

const fill = document.querySelector(".fill");
const buttons = document.querySelectorAll('button.buttonClass');
const pro = new Projekt();

buttons.forEach((button, key) => button.addEventListener('click', () => {

    const className = "activeProgress";
    const isNotButtonAlreadyActive = !button.classList.contains(className);

    if(isNotButtonAlreadyActive) {
        activateButton(progressAll[key], projektnameAll[key]);
        const activeButtons = document.querySelectorAll(`button.${className}`);
        if(activeButtons.length !== 0) {
            activeButtons.forEach(activeButton => activeButton.classList.remove(className));
        }
        button.classList.add(className);
    }

}));

let progressAll = [80, 10, 20,  30, 40];
let projektnameAll = [pro._name, "Projekt 2", "Projekt 3","Projekt 4","Projekt 5",]


function activateButton(progress, projektname) {
    let a = 0;
    let run = setInterval(fillBar, 1);

    function fillBar() {
        a = a + 1;
        if (a == progress + 1) {
            clearInterval(run);
        } else {
            let counter = document.querySelector(".counter");
            counter.textContent = a + "%" + " " + projektname;
            fill.style.width = a + "%";
        }
    }
}

