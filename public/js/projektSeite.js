import {ProjektService} from "./projekt/services/projektService.js";
import {Teilnehmerin} from "./projekt/domain/teilnehmerin.js";
import {Literatur} from "./projekt/domain/literatur.js";
import {Aufgabe} from "./projekt/domain/aufgabe.js";
import {Projekt} from "./projekt/domain/projekt.js";
import {Link} from "./projekt/domain/link.js";
import {IndexedDB} from "./indexedDB.js";

//Listenelemente auswählen zum ein- bzw. ausblenden
let toggle = document.getElementsByClassName('caret');
let i;
for (i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', function () {
        this.parentElement.querySelector(".nested").classList.toggle('active');
        this.classList.toggle('caret-down');
    });
}

//Mailfunktionen
document.getElementById("mail1").addEventListener('click', mailsender1);

function mailsender1() {
    const mailbetreff = "?subject=" + document.getElementById("projektName").innerHTML;
    location.href = "mailto:" + projektServiceVerzeichnis[counter]._projekt._teilnehmerListe[0]._email + mailbetreff;
}

document.getElementById("mail2").addEventListener('click', mailsender2);

function mailsender2() {
    const mailbetreff = "?subject=" + document.getElementById("projektName").innerHTML;
    location.href = "mailto:" + projektServiceVerzeichnis[counter]._projekt._teilnehmerListe[1]._email + mailbetreff;

}

document.getElementById("mail3").addEventListener('click', mailsender3);

function mailsender3() {
    const mailbetreff = "?subject=" + document.getElementById("projektName").innerHTML;
    location.href = "mailto:" + projektServiceVerzeichnis[counter]._projekt._teilnehmerListe[2]._email + mailbetreff;
}

/*
    Das Fleisch und Kartoffeln der Projektseite
    Speichern, anzeigen, eingabe und Validierung der Eingaben wird hier initialisiert oder direkt ausgeführt.

    Initiale Entwicklung: Dirk Stricker
    Refactoring in verschiedene Klassen: Dirk Stricker & Benjamin Ansohn McDougall
    Formular zur Eingabe: Kim Lara Feller & Louis Grümmer, Refactored Dirk Stricker
    IndexedDb: Dirk Stricker und Benjamin Ansohn McDougall
*/

// Hält die Projekte der Datenbank im Speicher
let projektServiceVerzeichnis = [];

const indexedDB = new IndexedDB();
// erstmal die Datenbank initialisieren
const openDb = indexedDB.initialize();

// Promise abholen, falls möglich und die Connection nutzen um etwas auszufüllen.
openDb.then((db) => {
    const objectStoreRequest = indexedDB.retrieveAllProjekts(db);

    objectStoreRequest.onsuccess = (event) => {
        setListeners();
        event.target.result.forEach((p, key) => projektServiceVerzeichnis[key] = new ProjektService(p));
        resetProjektView(0);
        db.close(event);
    }

    objectStoreRequest.onerror = (event) => {
        console.log(`Bei der Übertragung ist etwas schiefgelaufen:
                    ${event.target.errorCode} ${event.target.errorDetail}`);
    };
});


// TODO: REFACTOR THIS AFTER CRUNCH
let counter = 0;

function toggleProjekt() {
    counter++;
    if (counter >= projektServiceVerzeichnis.length) {
        counter = 0;
    }
    resetProjektView(counter);
}

function resetProjektView(position = 0) {
    projektServiceVerzeichnis[position].fillWindow();
    start(projektServiceVerzeichnis[position]._projekt);
    counter = position;
}

/*
    Initialisiert Listener die auf die Daten aus der Datenbank angewiesen sind.
 */
function setListeners() {
    document.getElementById("projektName").addEventListener('click', toggleProjekt);

    document.addEventListener('keydown', (evt) => {
        let key = evt.key;

        if (key === "ArrowLeft") {
            counter--;
            if (counter < 0) {
                counter = projektServiceVerzeichnis.length - 1;
            }
            resetProjektView(counter);
        }

        if (key === "ArrowRight") {
            counter++;
            if (counter >= projektServiceVerzeichnis.length) {
                counter = 0;
            }
            resetProjektView(counter);
        }
    });

    document.getElementById("mail1").addEventListener('click', mailsender1);
    document.getElementById("mail2").addEventListener('click', mailsender2);
    document.getElementById("mail3").addEventListener('click', mailsender3);
}

//Funktion zum Aufruf des Anlegeformulars
document.getElementById("projektAnlegen").addEventListener('click', projektAnlegen);

function projektAnlegen() {
    document.getElementById("projektformular").className = "elementON";
    document.getElementById("projektSpeichern").className = "elementON";
    document.getElementById("projektbezeichnung").readOnly = false;
}

//Funktion zum Schließen des Formulars
document.getElementById("projektAbbrechen").addEventListener('click', projektAbbrechen);

function projektAbbrechen() {
    document.getElementById("projektformular").className = "elementOFF";
    document.getElementById("bearbeitungSpeichern").className = "elementOFF";
    document.getElementById("projektSpeichern").className = "elementOFF";
}

//Funktion zum Loeschen eines Projekts
document.getElementById("projektLoeschen").addEventListener('click', projektLoeschen);


/*
    Nutzt searchViaIndex um Projekte nach ihren Titeln aus der Datenbank zu löschen.
    Löscht auch das ELement aus dem lokal gespeichertem Projektverzeichnis.
    Hier nutzen wir einen CursorWithValue nachdem wir den Index nach dem Namen anstatt der Projektnummer
    durchsucht. Der CursorWithValue durchläuft den Index anstatt des ObjectStores.

    Autor: Benjamin Ansohn McDougall
 */
function projektLoeschen() {
    indexedDB.initialize().then((db) => {
            const projektName = document.getElementById('projektName').innerHTML;
            const idbIndex = indexedDB.searchViaIndex(db, projektName, "_name");
            const idbRequest = idbIndex.openCursor();
            idbRequest.onsuccess = () => {
                const cursor = idbRequest.result;

                if (cursor && cursor.key !== projektName) {
                    cursor.continue();
                } else if (cursor && cursor.key === projektName && projektServiceVerzeichnis.length > 1) {
                    cursor.delete().onsuccess = () => {
                        /*
                            Private function um das gelöschte Projekt vom Frontend zu entfernen.

                            Autor: Benjamin Ansohn McDougall
                         */
                        function removeProjektServiceFromFrontEnd() {
                            const loc = projektServiceVerzeichnis.map((projektService, key) => {
                                if (projektService._projekt._name === projektName) {
                                    return key;
                                }
                            });
                            projektServiceVerzeichnis.splice(loc, 1);
                            resetProjektView(0);
                        }

                        removeProjektServiceFromFrontEnd();
                    };
                } else {
                    console.error(`Ein Projekt mit dem Namen ${projektName} konnte nicht gelöscht werden`);
                    alert('Argh, bitte erst ein neues Projekt anlegen bevor Du das letzte löscht.');
                }
            }
        }
    );
}

/*
    Suche nach einem Projekt nach dem Projektnamen und manipuliert HtmlElemente.

    params: projektName

    Autor Benjamin Ansohn McDougall
 */
function projektSuchen(projektName) {
    indexedDB.initialize().then((db) => {
            const IdbIndex = indexedDB.searchViaIndex(db, projektName, "_name");
            IdbIndex.get(projektName).onsuccess = (event) => {
                // HTML Elemente von hier aus ausfüllen oder Hilfsfunktionen basteln.
            }
        }
    );
}

//Funktion zum Speichern der eingegebenen Formulardaten fuer das Erstellen eines neuen Projekts
document.getElementById("projektSpeichern").addEventListener('click', function (e) {
    e.preventDefault();
    do {
        projektEingabenValidieren();
    } while (projektEingabenValidieren() !== true)

    projektSpeichern();

    document.getElementById("projektformular").className = "elementOFF";
    document.getElementById("bearbeitungSpeichern").className = "elementOFF";
    document.getElementById("projektSpeichern").className = "elementOFF";
    document.getElementById("projektformular").reset();

});

/*
    Speichert das aktuell in dem Formular angezeigte Projekt

    Autor: Benjamin Ansohn McDougall
 */
function projektSpeichern() {
    /*
        Private Hilfsfunktion - um die Projekt-Daten aus dem HTML-Formular zu extrahieren
     */
    function projektVonDerHtmlSeiteExtrahieren() {
        const bezeichnung = document.getElementById('projektbezeichnung').value;

        const teilnehmenden = [];

        for (let i = 1; i < 10; i++) {
            const name = document.getElementById(`tn${i}name`).value;
            const mail = document.getElementById(`tn${i}mail`).value;

            if (name !== '') {
                teilnehmenden.push(new Teilnehmerin(name, mail));
            }
        }

        const litVerzeichnis = [];
        litVerzeichnis[0] = new Literatur(document.getElementById('litForm1').value);
        litVerzeichnis[1] = new Literatur(document.getElementById('litForm2').value);
        litVerzeichnis[2] = new Literatur(document.getElementById('litForm3').value);

        const linkVerzeichnis = [];
        linkVerzeichnis[0] = new Link(document.getElementById('link1ref').value,
            document.getElementById('link1text').value);
        linkVerzeichnis[1] = new Link(document.getElementById('link2ref').value,
            document.getElementById('link2text').value);
        linkVerzeichnis[2] = new Link(document.getElementById('link3ref').value,
            document.getElementById('link3text').value);

        const aufgabenListe = [];
        aufgabenListe[0] = new Aufgabe(document.getElementById('aufgabe1text').value);
        aufgabenListe[1] = new Aufgabe(document.getElementById('aufgabe2text').value);
        aufgabenListe[2] = new Aufgabe(document.getElementById('aufgabe3text').value);

        const notizen = document.getElementById('notizen').value;

        return new Projekt(
            Math.random() * 10000000,
            true,
            bezeichnung,
            teilnehmenden,
            litVerzeichnis,
            linkVerzeichnis,
            notizen,
            aufgabenListe,
            [Math.random() * 20, Math.random() * 100, Math.random() * 10],
            Math.random() * 100);
    }

    /*
        Private Hilfsfunktion die das aktuelle Projekt in der IndexedDb speichert.
     */
    function projektInIndexedDbSpeichern() {
        indexedDB.initialize().then((db) => {
            const idbRequest = indexedDB.speichern(db, zuSpeicherndesProjekt);
            idbRequest.transaction.oncomplete = () => {
                console.log(`${zuSpeicherndesProjekt._name} wurde in ${indexedDB.objectStoreName} erfolgreich gespeichert.`);
                db.close;
            }

            idbRequest.onerror = () => {
                console.log(`Beim Speichern des Projekts: ${zuSpeicherndesProjekt} in ${indexedDB.objectStoreName} 
                    ist folgender Fehler aufgetreten: ${db.errorCode}`);
            }
        });
    }

    const zuSpeicherndesProjekt = projektVonDerHtmlSeiteExtrahieren();
    projektInIndexedDbSpeichern.call(this);

    const projektImHtmlFormat = new ProjektService(zuSpeicherndesProjekt);
    const anzahlProjekte = projektServiceVerzeichnis.length;
    projektServiceVerzeichnis[anzahlProjekte] = projektImHtmlFormat;
    resetProjektView(anzahlProjekte);
}

/*
    Funktion zum Bearbeiten eines bestehenden Projekts
 */
document.getElementById("projektBearbeiten").addEventListener("click", projektBearbeiten);

function projektBearbeiten() {
    document.getElementById("bearbeitungSpeichern").className = "elementON";
    document.getElementById("projektformular").className = "elementON";
    document.getElementById("projektbezeichnung").readOnly = true;
    projektServiceVerzeichnis[counter].fillForm();
}

document.getElementById("bearbeitungSpeichern").addEventListener('click', projektBearbeitungSpeichern)

function projektBearbeitungSpeichern() {
    indexedDB.initialize().then(() => {
        projektSpeichern();
        projektLoeschen();
    });

    document.getElementById("projektformular").className = "elementOFF";
    document.getElementById("bearbeitungSpeichern").className = "elementOFF";
}

/* https://stackoverrun.com/de/q/1227734
    einfacher regulärer Ausdruck zum Überprüfen des Formats einer E-Mail (patternMail)

    https://regexr.com/37i6s
    regulärer Ausdruck zum Überprüfen des Formats einer URL, in dem Fall mit https (patternLink)

    test() Methode sucht nach einem Pattern, also Muster, in einem String.
    Liefert true zurück, wenn eine Übereinstimmung da ist.
 */
function projektEingabenValidieren() {
    let projektbezeichnung = document.getElementById("projektbezeichnung");
    let tn1name = document.getElementById("tn1name");
    let tn1mail = document.getElementById("tn1mail");
    let link1text = document.getElementById("link1text");
    let patternMail = /(^$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]))/;
    let patternLink = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    let link1ref = document.getElementById("link1ref");

    if (projektbezeichnung.value === "") {
        alert("Dein Projekt braucht einen Namen!");
        document.getElementById("projektbezeichnung");
        projektbezeichnung.reset();
        return false;
    } else if (tn1name.value !== "" && tn1mail.value === "" || tn1mail.value !== "" && tn1name.value === "") {
        alert("Teilnehmer und E-Mail bitte immer zusammen angeben.")
        tn1name.reset();
        tn1mail.reset();
        return false;
    } else if (!(patternMail.test(tn1mail.value) || tn1mail.value === "")) {
        alert("Ups! Das war keine Emailadresse.");
        tn1mail.reset();
        return false;
    } else if (link1text.value !== "" && link1ref.value === "" || link1ref.value !== "" && link1text.value === "") {
        alert("Bitte Linktext und Link zusammen angeben.")
        link1ref.reset();
        return false;
    }  else if (!(patternLink.test(link1ref.value) || link1ref.value === "")) {
        alert("Dies ist keine gültige URL")
        link1ref.reset();
        return false;
    } else {
        return true;
    }
}
