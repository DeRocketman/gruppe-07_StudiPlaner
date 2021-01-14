/*
    Klasse die sich um die Termineinträge kümmert, sprich um die Persistierung und das Laden
    Nutzt die Klasse Termin.

    Als Gimmick und POC wurde noch ein randomisierter Sprüche 'generator' implementiert durch Louis Grümmer und Ben Ansohn McDougall

    Ansonsten wurde der Hauptteil dieser Klasse von Ben Ansohn McDougall implementiert.
 */
import {Termin} from "./domain/Termin.js";

class CalendarEntry {
    items;
    constructor(date = new Date()) {
        this.datePicker = document.getElementById('aktuellesDatum');
        this.einzelterminCheckbox = document.getElementById('einzeltermin');
        this.teilnehmerListeSelect = document.getElementById('teilnehmerListe');
        this.veranstaltungsart1 = document.getElementById('auswahl1');
        this.veranstaltungsart2 = document.getElementById('auswahl2');
        this.veranstaltungsart3 = document.getElementById('auswahl3');
        this.terminInfosTextArea = document.getElementById('notizfeld');
        this.IsoDatumOhneZeitStempel = date.toISOString().substr(0, 10);
        this.datePicker.value = this.IsoDatumOhneZeitStempel;
        this.termin = new Termin();
        this.items = Array("leider keine Sprüche");
    }

    spruchDesTages() {
        const url = 'data/sprueche.json';

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                }
            };

            xhr.onerror = () => {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send(null);
        });
    };

    terminAbfragen(terminInfosTextArea = this.terminInfosTextArea, datum = this.IsoDatumOhneZeitStempel) {
        const gespeicherterText = localStorage.getItem(datum);
        const isNotTerminOrValue = gespeicherterText === '' || gespeicherterText === null;

        if(isNotTerminOrValue) {
            this.textVeraendern(terminInfosTextArea);
        } else {
            terminInfosTextArea.value = gespeicherterText;
        }
    }

    veranstaltungsArtErmitteln() {
        if(this.veranstaltungsart1.checked) {
            this.termin.veranstaltungsArt = this.veranstaltungsart1.value;
        } else if (this.veranstaltungsart2.checked) {
            this.termin.veranstaltungsArt = this.veranstaltungsart2.value;
        } else {
            this.termin.veranstaltungsArt = this.veranstaltungsart3.value;
        }
    }

    textVeraendern(terminInfosTextArea = this.terminInfosTextArea)
    {
        terminInfosTextArea.value = '';
        terminInfosTextArea.placeholder = this.randomText(this.items);
    }

    terminLoeschen(terminInfosTextArea = this.terminInfosTextArea, datum = this.IsoDatumOhneZeitStempel)
    {
        const terminInfos = terminInfosTextArea.value;
        const terminInfosWurdenEingegeben = terminInfos !== '';
        if(terminInfosWurdenEingegeben) {
            console.log('Deleting entry');
            localStorage.removeItem(datum);
            localStorage.setItem(datum, "");
            terminInfosTextArea.value = "";
        }
    }

    terminSpeichern(terminInfosTextArea = this.terminInfosTextArea, datum = this.IsoDatumOhneZeitStempel)
    {
        this.termin.text = terminInfosTextArea.value;
        const terminInfos = terminInfosTextArea.value;
        const terminInfosWurdenEingegeben = terminInfos !== '';
        const browserKannLokalSpeichern = typeof(Storage) !== "undefined";
        this.veranstaltungsArtErmitteln();
        this.termin.einzelTerminOderSerie = this.einzelterminCheckbox.selected;

        const selektierteTeilnehmerinnen = this.teilnehmerListeSelect.selectedOptions;
        this.termin.teilnehmer = [...selektierteTeilnehmerinnen].map(option => option.innerText);
        console.log(`${this.termin.toString()}`);

        if(terminInfosWurdenEingegeben) {
            if (browserKannLokalSpeichern) {
                localStorage.setItem(datum, terminInfos);
                alert('Termin wurde gespeichert');
            } else {
                alert('Sorry, Dein Browser kann nicht lokal speichern :-/');
            }
        } else {
            alert('Bitte gib etwas ein damit wir Den Termin speichern werden.');
        }
    }

    // Gibt random Sprüche im Textfeld aus, wenn kein Termin eingetragen ist.
    randomText(items)
    {
        return items[Math.floor(Math.random()*items.length)];
    }
}

// Beim Laden der Seite wird dieser Eventlistener aufgerufen
window.addEventListener('load', async () => {
    // müssen hier aufgrund der Asynchronen Natur der Seite auf die items warten -> await
    calendarEntry.items = await calendarEntry.spruchDesTages().then(value => { return JSON.parse(value).sprueche });
    calendarEntry.terminAbfragen();
}, false);

const calendarEntry = new CalendarEntry();


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
