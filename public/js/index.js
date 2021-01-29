import {IndexedDB} from "./indexedDB.js";
import {initListeners} from "./Progressbar.js";


/*Start Tabs */
/*
    Autor: Kim Lara Feller nachträgliches Refactoring mit Louis Grümmer bzgl. script type module.
 */
//Projekt 1 ist als default angeklickt
document.getElementById("defaultSelected").classList.add("active");
const tab1 = document.getElementById("Project1")
const tab2 = document.getElementById("Project2")
const tab3 = document.getElementById("Project3")
const tab4 = document.getElementById("Project4")
const tabArray = [tab1, tab2, tab3, tab4];
tabArray[0].classList.add("tabActive");

const buttons = document.querySelectorAll('button.tablink');
buttons.forEach((button, key) => button.addEventListener('click', () => {

    const className = "active";
    const isNotButtonAlreadyActive = !button.classList.contains(className);

    if (isNotButtonAlreadyActive) {
        const activeButtons = document.querySelectorAll(`button.${className}`);
        if (activeButtons.length !== 0) {
            activeButtons.forEach(activeButton => activeButton.classList.remove(className));
        }
        button.classList.add(className);
        for (let i = 0; i < tabArray.length; i++) {
            tabArray[i].classList.remove("tabActive");
        }
        tabArray[key].classList.add("tabActive");
    }
}));


/*
    Füllt die Tabs mit dem Titel der jeweiligen Projekte und den passenden Notizen
    auf 150 Zeichen beschränkt.

    Autor: Benjamin Ansohn McDougall
 */
function tabsAusDbFüllen(projektVerzeichnis) {
    projektVerzeichnis.forEach((projekt, schluessel) => {
        const nochNichtMehrAlsVierProjekte = schluessel <= 3;
        if (nochNichtMehrAlsVierProjekte) {
            tabArray[schluessel].innerHTML =
                `<h4>${projekt._name}</h4> <br/> <p>${projekt._notizen.substr(0, 150)}...</p>`;
        }
    });
}

/* Ende Tabs */

/*
    Füllt die GruppenTabs mit den Einträgen aus den Projekten der IndexedDb aus.
    Limitiert auf die ersten vier, da das Mockup dahingehend eingeschränkt war.

    param: Liste von Projekten

    Autor: Ben Ansohn McDougall
 */
function GruppenAusfuellen(projektVerzeichnis) {
    projektVerzeichnis.forEach((projekt, schluessel) => {
        const nochNichtMehrAlsVierProjekte = schluessel <= 3;
        if (nochNichtMehrAlsVierProjekte) {
            const teilnehmerString = TeilnehmerinnenListeToCsv(projekt._teilnehmerListe);
            document.getElementById('group' + schluessel)
                .innerHTML = `${projekt._name} <br/> ${teilnehmerString
                // entfernt das lästige Komma am Ende
                .substr(0, teilnehmerString.length - 2)}`;
        }
    });
}

/*
    Hilfsfunktion um die Teilnehmerinnen auszupacken.
    Reduziert das Array zu einem komma getrennten String.

    param: Liste von Teilnehmerinnen.

    Autor: Ben Ansohn McDougall
 */
function TeilnehmerinnenListeToCsv(teilnehmerinnnenListe) {
    return teilnehmerinnnenListe.reduce((string, teilnehmer) => string + teilnehmer._name + ', ', "");
}

/*
    IndexedDb Operation, initialisiert und holt alle Projekte per Cursor anstatt per getAll().
    Das hat den Vorteil, das wir nicht durch alle vorhandenen Projekte iterieren müssen.

    Diese Projekte werden direkt an die Elemente im Frontend weitergereicht.

    param: anzahlZuHolendenProjekte => Anzahl der zu ladenden Projekte

    Autor: Ben Ansohn McDougall
 */
const nProjekteAusDbLaden = (anzahlZuHolendenProjekte) => {
    const indexedDb = new IndexedDB();
    indexedDb.initialize().then((db) => {
        const projektVerzeichnis = [];
        const cursorRequest = indexedDb.retrieveItemsWithCursor(db);
        cursorRequest.onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor && projektVerzeichnis.length < anzahlZuHolendenProjekte) {
                projektVerzeichnis.push(cursor.value);
                cursor.continue();
            } else {
                // Da keine Elemente mehr im ObjectStore sind können wir abbrechen.
                console.log(`Es wurden ${projektVerzeichnis.length} ${indexedDb.objectStoreName} per Cursor geholt`);
                // TODO: Dinge die man nun auf der index.html initialisiseren kann, z.B. Tabs, Fortschritt
                initListeners(projektVerzeichnis);
                GruppenAusfuellen(projektVerzeichnis);
                tabsAusDbFüllen(projektVerzeichnis);
            }
        }

        cursorRequest.onerror = (event) => {
            console.error(`Beim aufrufen der ${indexedDb.objectStoreName} per IDBCursor,
                    ist folgender Fehler aufgetreten: ${cursorRequest.errorCode}`);
        }
    });
}
nProjekteAusDbLaden(5);


/*
    Ende IndexedDb
 */
