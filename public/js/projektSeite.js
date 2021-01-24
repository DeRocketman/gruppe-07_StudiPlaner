import {ProjektService} from "./projekt/services/projektService.js";
import {Projekt} from "./projekt/domain/projekt.js";
import {BeispielProjekt} from "./projekt/repository/beispielProjekt.js";
import {BeispielProjekt2} from "./projekt/repository/beispielProjekt2.js";
import {Teilnehmerin} from "./projekt/domain/teilnehmerin.js";
import {Literatur} from "./projekt/domain/literatur.js";
import {Link} from "./projekt/domain/link.js";
import {Aufgabe} from "./projekt/domain/aufgabe.js";
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
//@TODO: Mailfunktionen an neue Situation (IndexedDB) anpassen
//Mailfunktionenen
let personAmail;
let personBmail;
let personCmail;
let mailbetreff = "?subject=" + document.getElementById("projektName").innerHTML;

function mailsender1() {
    location.href = "mailto:" + personAmail + mailbetreff;
}

function mailsender2() {
    location.href = "mailto:" + personBmail + mailbetreff;
}

function mailsender3() {
    location.href = "mailto:" + personCmail + mailbetreff;
}

//1. Diese Funktion schafft die Vorrausetzung zum Anlegen eines neuen Projekts
function frageNachProjektFunktion() {
    document.getElementById("projektName").innerHTML = "Neues Projekt anlegen?";
    document.getElementById("neuesProjekt").className = "elementON";
}

//2. Diese Funktion schaltet Option zum Anlegen eines Projekts frei
document.getElementById("neuesProjekt").addEventListener("click", SchalteFreiFunktion);

function SchalteFreiFunktion() {
    document.getElementById("inputFeld").className = "elementON";
    document.getElementById("projektuebernahme").className = "settingON";
    document.getElementById("projektabrruch").className = "settingON";
}

/*
    Das Fleisch und Kartoffeln der Projektseite
    Speichern, anzeigen, eingabe und Validierung der Eingaben wird hier initialisiert oder direkt ausgeführt.

    Initiale Entwicklung: Dirk Stricker
    Refactoring in verschiedene Klassen: Dirk Stricker & Benjamin Ansohn McDougall
    Formular zur Eingabe: Kim Lara Feller & Louis Grümmer
    IndexedDb: Dirk Stricker und Benjamin Ansohn McDougall
*/

const indexedDB = new IndexedDB();

async function init(iDb) {
    return iDb.initialize();
}

const db = init(indexedDB);

async function get(indexedDb, db, key) {
    return indexedDB.retrieveOneItemVia_nummer(db, key);
}

get(indexedDB, db,1);





// const projekteInDerDb = db.retrieveAllProjekts();

const projektService = new ProjektService();
projektService.fillWindow();
const projektService1 = new ProjektService(new Projekt(2, true, 'Projekt 10000'));
const projektService2 = new ProjektService(BeispielProjekt());
const projektService3 = new ProjektService(BeispielProjekt2());
const projektVerzeichnis = [projektService, projektService1, projektService2, projektService3];


// TODO: REFACTOR THIS AFTER CRUNCH
let counter = 0;

function toggleProjekt() {
    counter++;
    if (counter >= projektVerzeichnis.length) {
        counter = 0;
    }
    projektVerzeichnis[counter].fillWindow();
}

document.getElementById("projektName").addEventListener('click', toggleProjekt);


document.addEventListener('keydown', (evt) => {
    let key = evt.key;

    if (key === "ArrowLeft") {
        counter--;
        if (counter <= 0) {
            counter = projektVerzeichnis.length - 1;
        }
        projektVerzeichnis[counter].fillWindow();
    }

    if (key === "ArrowRight") {
        counter++;
        if (counter >= projektVerzeichnis.length) {
            counter = 0;
        }
        projektVerzeichnis[counter].fillWindow();
    }
});

//Funktion zum Aufruf des Anlegeformulars
document.getElementById("projektAnlegen").addEventListener('click', projektAnlegen);

function projektAnlegen() {
    document.getElementById("projektformular").className = "elementON";
}

//Funktion zum Schließen des Formulars
document.getElementById("projektAbbrechen").addEventListener('click', projektAbbrechen);

function projektAbbrechen() {
    document.getElementById("projektformular").className = "elementOFF";
}

//Funktion zum Loeschen eines Projekts
document.getElementById("projektLoeschen").addEventListener('click', projektLoeschen);

function projektLoeschen() {
    //@TODO: Funktion zum loeschen des aktuell angezeigten Projekts
}

const savedProject = new Projekt();

//Funktion zum Speichern der eingegebenen Formulardaten fuer das Projekt
document.getElementById("projektSpeichern").addEventListener('click', function (e) {
    e.preventDefault();
    do {
        projektEingabenValidieren();
    } while (projektEingabenValidieren() !== true)

    projektSpeichern();

    document.getElementById("projektformular").className = "elementOFF";
    document.getElementById("projektformular").reset();

});


function projektSpeichern() {
    const bezeichnung = document.getElementById('projektbezeichnung').value;

    const name = document.getElementById('tn1name').value;
    const mail = document.getElementById('tn1mail').value;

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

    const zuSpeicherndesProjekt = new Projekt(
        Math.random(999999999999),
        true,
        bezeichnung,
        [new Teilnehmerin(name, mail)],
        litVerzeichnis,
        linkVerzeichnis,
        "",
        aufgabenListe);

    projektVerzeichnis[projektVerzeichnis.length] = zuSpeicherndesProjekt;
    const projektImHtmlFormat = new ProjektService(zuSpeicherndesProjekt)
    const projektAufSeiteAnzeigen = projektImHtmlFormat.fillWindow();
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
    let tn1mail = document.getElementById("tn1mail");
    let patternMail = /(^$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]))/;
    //let patternLink = /(^$|^(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/;
    let link1ref = document.getElementById("link1ref");

    if (projektbezeichnung.value === "") {
        alert("Dein Projekt braucht einen Namen!");
        document.getElementById("projektbezeichnung");
        return false
    } else if (!(patternMail.test(tn1mail.value) || tn1mail === "")) {
        alert("Ups! Das war keine Emailadresse.");
        tn1mail.reset();
        return false
    } //else if(!(patternLink.test(link1ref.value))){
        //alert("Der Link bringt dir nichts. Inkorrektes Format!");
    //return false
    else {
        return true
    }
}

