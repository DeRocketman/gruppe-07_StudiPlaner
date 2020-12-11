/*
    Klasse die sich um die Termineinträge kümmert - noch ein rough Draft.
 */
import {Termin} from "./domain/Termin.js";

class CalendarEntry {
    constructor(date = new Date()) {
        this.terminInfosTextArea = document.getElementById('notizfeld');
        this.datePicker = document.getElementById('aktuellesDatum');
        this.IsoDatumOhneZeitStempel = date.toISOString().substr(0, 10);
        this.datePicker.value = this.IsoDatumOhneZeitStempel;
        this.termin = new Termin();
        this.items = Array(
            "Yolo!", "Nutze den Tag sonst nutzt dieser Dich", "Morgens ist mir immer zu hell",
            "Jetzt ne schöne Pommes und dann lernen...",
            "Wer ist eigentlich diese Uni?",
            "Ein hoch auf die Schule",
            "Die schönste Jahreszeit ist Urlaub",
            "Man kann nicht immer nur lernen....aber fast immer.");
    }

    terminAbfragen(terminInfosTextArea = this.terminInfosTextArea, datum = this.IsoDatumOhneZeitStempel) {
        const gespeicherterText = localStorage.getItem(datum);
        const isNotTerminOrValue = gespeicherterText === '' || gespeicherterText === null;

        if(isNotTerminOrValue) {
            this.textVeraendern(terminInfosTextArea);
        } else {
            terminInfosTextArea.value = gespeicherterText;
        }
    }

    textVeraendern(terminInfosTextArea = this.terminInfosTextArea) {
        terminInfosTextArea.value = '';
        terminInfosTextArea.placeholder = this.random_text(this.items);
    }

    terminLoeschen(terminInfosTextArea = this.terminInfosTextArea, datum = this.IsoDatumOhneZeitStempel) {
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

const calendarEntry = new CalendarEntry();
calendarEntry.terminAbfragen();

const loeschenButton = document.getElementById('loeschenButton');
loeschenButton.addEventListener('mousedown', () => {
    calendarEntry.terminLoeschen(calendarEntry.terminInfosTextArea, datePicker.value);
});

const speichernButton = document.getElementById('speichernButton');
speichernButton.addEventListener('mousedown', () => {
    calendarEntry.terminSpeichern(calendarEntry.terminInfosTextArea, datePicker.value);
});

const datePicker = document.querySelector("input[type='date']");
datePicker.addEventListener('change', () => {
    calendarEntry.terminAbfragen(calendarEntry.terminInfosTextArea, datePicker.value);
});
