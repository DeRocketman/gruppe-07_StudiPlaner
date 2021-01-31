/*
    Autor: Louis Grümmer nachträgliches Refactoring mit Benjamin McDougall.
    Inspiration: https://www.youtube.com/watch?v=gR8gb_wWEnY
 */


const fill = document.querySelector(".fill");
const buttons = document.querySelectorAll('button.buttonClass');
/*
    Initialiesiert jeden Button mit einem Eventlistener und schaltet diese an und aus.
    @params projekte
 */

export function initListeners(projekte) {
    buttons.forEach((button, key) => button.addEventListener('click', () => {
        const className = "activeProgress";
        const isNotButtonAlreadyActive = !button.classList.contains(className);
        //prüft alle Knöpfe in der buttonClass und setzt den geklickten Button auf active wenn er vorher nicht active war.
        if (isNotButtonAlreadyActive) {
            activateButton(projekte[key]._progress, projekte[key]._name);
            const activeButtons = document.querySelectorAll(`button.${className}`);
            //entfernt acctiveProgress von dem Button der vor dem Klick eines neues Buttons active war
            if (activeButtons.length !== 0) {
                activeButtons.forEach(activeButton => activeButton.classList.remove(className));
            }
            button.classList.add(className);
        }
    }));
}
/*
    Füllt die Fortschrittsleiste und schreibt den Fortschritt und den Namen der übergebenden Daten.
    @params progress
    @params projektname
 */
function activateButton(progress, projektname) {
    let fillLevel = 0;
    //setzt ein Intervall und ruft die Funktion fillBar jede Millisekunde auf
    let run = setInterval(fillBar, 1);

    function fillBar() {
        //erhoeht das fillLevel so lange, bis der übergebende progress um 1 größer ist
        fillLevel = fillLevel + 1;
        if (fillLevel === progress + 1) {
            //beendet das Intervall
            clearInterval(run);
        } else {
            let counter = document.querySelector(".counter");
            counter.textContent = fillLevel + "%" + " " + projektname;
            fill.style.width = fillLevel + "%";
        }
    }
}

