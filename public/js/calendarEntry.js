window.onload = function () {
    const terminInfosTextArea = document.getElementById('notizfeld');
    const datumsAnzeigeLinks = document.getElementById('aktuellesDatum');
    const heutigesDatum = cal.toShortString();
    const items = Array("text1", "text2", "text3", "text4", "text5", "text6","text7");

    datumsAnzeigeLinks.innerHTML = heutigesDatum;

    function terminAbfragen(datum = heutigesDatum) {
        if(terminInfosTextArea.value == "undefined" ){
            function textVeraendern;
        } else{terminInfosTextArea.value = localStorage.getItem(datum);
        }

    }
    function textVeraendern() {
        document.getElementById("notizfeld").placeholder = function random_text(items);

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

    function random_text(items)
    {

        return items[Math.floor(Math.random()*items.length)];

    }



    const loeschenButton = document.getElementById('loeschenButton');
    loeschenButton.addEventListener('mousedown', textFeldLoeschen);

    const speichernButton = document.getElementById('speichernButton');
    speichernButton.addEventListener('mousedown', terminSpeichern);

    terminAbfragen();
};
