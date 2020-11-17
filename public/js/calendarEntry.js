window.onload = function () {
    const terminInfosTextArea = document.getElementById('notizfeld');
    const datumsAnzeigeLinks = document.getElementById('aktuellesDatum');
    const heutigesDatum = cal.toShortString();
    datumsAnzeigeLinks.innerHTML = heutigesDatum;

    function terminAbfragen(datum = heutigesDatum) {
        terminInfosTextArea.value = localStorage.getItem(datum);
    }

    function textFeldLoeschen(datum = heutigesDatum) {
        // TODO: funzt leider nicht so richtig
        localStorage.removeItem(datum);
        terminInfosTextArea.value = "";
    }

    function terminInfosSpeichern(terminInfos) {
        localStorage.setItem(cal.toShortString(), terminInfos);
        alert("Heutige Termine ist gespeichert! :) ");
    }

    function terminSpeichern() {
        const terminInfos = terminInfosTextArea.value;
        const terminInfosWurdenEingegeben = terminInfos !== '';
        const browserKannLokalSpeichern = typeof(Storage) !== "undefined";

        if(terminInfosWurdenEingegeben) {
            if (browserKannLokalSpeichern) {
                terminInfosSpeichern(terminInfos);
            } else {
                alert('Sorry, Dein Browser kann nicht lokal speichern :-/');
            }
        } else {
            alert('Bitte gib etwas ein damit wir Den Termin speichern werden.');
        }
    }

    // TODO: Louis, wenn noch kein Termin im TextArea ist
    //       Random Quotes Math.random(n) mit text aus einem Array.

    const loeschenButton = document.getElementById('loeschenButton');
    loeschenButton.addEventListener('mousedown', textFeldLoeschen);

    const speichernButton = document.getElementById('speichernButton');
    speichernButton.addEventListener('mousedown', terminSpeichern);

    terminAbfragen();
};
