window.onload = function () {
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

        terminAbfragen(datum = this.IsoDatumOhneZeitStempel) {
            const gespeicherterText = localStorage.getItem(datum);
            console.log(gespeicherterText);

            if(this.terminInfosTextArea.value === "" && gespeicherterText === "" ){
                this.textVeraendern();
            } else {
                this.terminInfosTextArea.value = gespeicherterText;
            }
        }

        textVeraendern() {
            console.log('Text wird verändert');
            if(this.terminInfosTextArea.value = "") {
                document.getElementById("notizfeld").placeholder = this.random_text(this.items);
            }
        }

        textFeldLoeschen(datum = this.IsoDatumOhneZeitStempel) {
            localStorage.removeItem(datum);
            localStorage.setItem(this.IsoDatumOhneZeitStempel, "");
            this.terminInfosTextArea.value = "";
            alert('Der Eintrag für heute wurde gelöscht.');
        }

        terminInfosSpeichern(terminInfos) {
            localStorage.setItem(this.IsoDatumOhneZeitStempel, terminInfos);
            alert("Heutige Termine ist gespeichert! :) ");
        }

        terminSpeichern()
        {
            console.log(`Termin speichern ${this.terminInfosTextArea}`);
            const terminInfos = this.terminInfosTextArea.value;
            const terminInfosWurdenEingegeben = terminInfos !== '';
            const browserKannLokalSpeichern = typeof(Storage) !== "undefined";

            if(terminInfosWurdenEingegeben) {
                if (browserKannLokalSpeichern) {
                    this.terminInfosSpeichern(terminInfos);
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

        getTodaysAppointment(today)
        {

        }
    }

const calendarEntry = new CalendarEntry();
const loeschenButton = document.getElementById('loeschenButton');
loeschenButton.addEventListener('mousedown', calendarEntry.textFeldLoeschen);

const speichernButton = document.getElementById('speichernButton');
speichernButton.addEventListener('mousedown', calendarEntry.terminSpeichern);

calendarEntry.textVeraendern();
calendarEntry.terminAbfragen();
};
