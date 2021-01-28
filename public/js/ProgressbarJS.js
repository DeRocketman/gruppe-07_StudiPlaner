/*
    Autor: Louis Grümmer nachträgliches Refactoring mit Benjamin McDougall.
    Inspiration: https://www.youtube.com/watch?v=gR8gb_wWEnY
 */

import {Projekt} from "./projekt/domain/projekt.js";

const fill = document.querySelector(".fill");
const buttons = document.querySelectorAll('button.buttonClass');



export function initListeners(projekte) {
    buttons.forEach((button, key) => button.addEventListener('click', () => {
        const className = "activeProgress";
        const isNotButtonAlreadyActive = !button.classList.contains(className);

        if (isNotButtonAlreadyActive) {
            activateButton(projekte[key]._progress, projekte[key]._name);
            const activeButtons = document.querySelectorAll(`button.${className}`);
            if (activeButtons.length !== 0) {
                activeButtons.forEach(activeButton => activeButton.classList.remove(className));
            }
            button.classList.add(className);
        }
    }));
}

function activateButton(progress, projektname) {
    let a = 0;
    let run = setInterval(fillBar, 1);

    function fillBar() {
        a = a + 1;
        if (a === progress + 1) {
            clearInterval(run);
        } else {
            let counter = document.querySelector(".counter");
            counter.textContent = a + "%" + " " + projektname;
            fill.style.width = a + "%";
        }
    }
}

