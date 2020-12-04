
class CalendarEntry {
    constructor() {
        this.terminInfosTextArea = document.getElementById('notizfeld');
        this.datePicker = document.getElementById('aktuellesDatum');
        this.IsoDatumOhneZeitStempel = new Date().toISOString().substr(0, 10);
        this.datePicker.value = this.IsoDatumOhneZeitStempel;
        this.items = Array("Yolo!", "Nutze den Tag sonst nutzt dieser Dich", "Morgens ist mir immer zu hell",
            "Jetzt ne schöne Pommes und dann lernen...",
            "Wer ist eigentlich diese Uni?",
            "Ein hoch auf die Schule",
            "Die schönste Jahreszeit ist Urlaub",
            "Man kann nicht immer nur lernen....aber fast immer.");
    }

    terminAbfragen(terminInfosTextArea = this.terminInfosTextArea, datum = this.IsoDatumOhneZeitStempel) {
        const gespeicherterText = localStorage.getItem(datum);
        const isNotTerminOrValue = gespeicherterText === '' || gespeicherterText === null;
        console.log(gespeicherterText + 'text gespeichert' + isNotTerminOrValue);

        if(isNotTerminOrValue) {
            console.log('Noch kein Eintrag');
            this.textVeraendern(terminInfosTextArea);
        } else {
            terminInfosTextArea.value = gespeicherterText;
        }
    }

    textVeraendern(terminInfosTextArea = this.terminInfosTextArea) {
        console.log('Text wird verändert');
        terminInfosTextArea.value = '';
        terminInfosTextArea.placeholder = this.random_text(this.items);
    }

    textFeldLoeschen(terminInfosTextArea = this.terminInfosTextArea, datum = this.IsoDatumOhneZeitStempel) {
        localStorage.removeItem(datum);
        localStorage.setItem(datum, "");
        terminInfosTextArea.value = "";
    }

    terminSpeichern(terminInfosTextArea = this.terminInfosTextArea, datum = this.IsoDatumOhneZeitStempel)
    {
        const terminInfos = terminInfosTextArea.value;
        const terminInfosWurdenEingegeben = terminInfos !== '';
        const browserKannLokalSpeichern = typeof(Storage) !== "undefined";

        if(terminInfosWurdenEingegeben) {
            if (browserKannLokalSpeichern) {
                console.log(datum);
                localStorage.setItem(datum, terminInfos);
            } else {
                alert('Sorry, Dein Browser kann nicht lokal speichern :-/');
            }
        } else {
            alert('Bitte gib etwas ein damit wir Den Termin speichern werden.');
        }
    }


    random_text(items)
    {
        return items[Math.floor(Math.random()*items.length)];
    }
}

window.onload = function () {

    const calendarEntry = new CalendarEntry();
    calendarEntry.terminAbfragen();

    const loeschenButton = document.getElementById('loeschenButton');
    loeschenButton.addEventListener('mousedown', () => {
        calendarEntry.textFeldLoeschen(calendarEntry.terminInfosTextArea, datePicker.value);
    });

    const speichernButton = document.getElementById('speichernButton');
    speichernButton.addEventListener('mousedown', () => {
        calendarEntry.terminSpeichern(calendarEntry.terminInfosTextArea, datePicker.value);
    });

    const datePicker = document.querySelector("input[type='date']");
    datePicker.addEventListener('change', () => {
        calendarEntry.terminAbfragen(calendarEntry.terminInfosTextArea, datePicker.value);
    });
};
