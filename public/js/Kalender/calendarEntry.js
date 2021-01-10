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
        this.terminInfosTextArea = document.getElementById('notizfeld');
        this.datePicker = document.getElementById('aktuellesDatum');
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

    textVeraendern(terminInfosTextArea = this.terminInfosTextArea)
    {
        terminInfosTextArea.value = '';
        terminInfosTextArea.placeholder = this.randomText(this.items);
    }

    terminLoeschen(terminInfosTextArea = this.terminInfosTextArea, datum = this.IsoDatumOhneZeitStempel)
    {
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

    randomText(items)
    {
        return items[Math.floor(Math.random()*items.length)];
    }
}

window.addEventListener('load', async () => {
    console.log('Sprüche werden asynchron geladen');
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
