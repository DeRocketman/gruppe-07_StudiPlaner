window.onload = function () {
    const terminInfosTextArea = document.getElementById('notizfeld');
    const datePicker = document.getElementById('aktuellesDatum');
    const heutigesDatum = cal.toShortString();
    const items = Array("Yolo!", "Nutze den Tag sonst nutzt dieser Dich", "Morgens ist mir immer zu hell",
        "Jetzt ne schöne Pommes und dann lernen...",
        "Wer ist eigentlich diese Uni?",
        "Ein hoch auf die Schule",
        "Die schönste Jahreszeit ist Urlaub",
        "Man kann nicht immer nur lernen....aber fast immer.");

    datePicker.value = heutigesDatum;

    function terminAbfragen(datum = heutigesDatum) {
        const gespeicherterText = localStorage.getItem(datum);
        console.log(gespeicherterText);

        if(terminInfosTextArea.value === "" && gespeicherterText === "" ){
            textVeraendern();
        } else {
            terminInfosTextArea.value = gespeicherterText;
        }
    }

    function textVeraendern() {
        document.getElementById("notizfeld").placeholder = random_text(items);
    }

    function textFeldLoeschen(datum = heutigesDatum) {
        localStorage.removeItem(datum);
        localStorage.setItem(cal.toShortString(), "");
        terminInfosTextArea.value = "";
        alert('Der Eintrag für heute wurde gelöscht.');
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

    function getTodaysAppointment() {

    }

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
