import {IndexedDB} from "./indexedDB.js";


/*Start Tabs */
/*
    Autor: Kim Lara Feller
 */
// Projekt 1 ist als default angeklickt
document.getElementById("defaultSelected").click();

function selectedProject(evt, project) {

    let i, tabcontent, tablink;

    //Alle Elemente (Tabcontent) unsichtbar machen, damit nur ausgewähltes angezeigt wird
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //Bei allen Elementen (Tablink) die Klasse active löschen. Sicherstellen, dass immer nur das ausgewählte active ist
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }

    // Angeklicktes Element die Klasse active zuweisen
    document.getElementById(project).style.display = "block";
    evt.classList.add("active");
}

/* Ende Tabs */

/*
    Füllt die GruppenTabs mit den Einträgen aus den Projekten der IndexedDb aus.
    Limitiert auf die ersten vier, da das Mockup dahingehend eingeschränkt war.

    param: Liste von Projekten

    Autor: Ben Ansohn McDougall
 */
function GruppenAusfuellen(projektVerzeichnis) {
    const hatVierProjekte = projektVerzeichnis.length === 4;
    if(hatVierProjekte) {
        projektVerzeichnis.forEach((projekt, schluessel) => {
            const teilnehmerString = TeilnehmerinnenListeToCsv(projekt._teilnehmerListe);
            document.getElementById('group' + schluessel)
                .innerHTML = `${projekt._name} <br/> ${teilnehmerString
                // entfernt das lästige Komma am Ende
                .substr(0, teilnehmerString.length - 2)}`;
        });
    } else {
        console.error("GruppenAusfuellen nur als Helfermethode für die ersten vier Elemente aus der IndexedDb nutzen");
    }
}

/*
    Hilfsfunktion um die Teilnehmerinnen auszupacken.
    Reduziert das Array zu einem komma getrennten String.

    param: Liste von Teilnehmerinnen.

    Autor: Ben Ansohn McDougall
 */
function TeilnehmerinnenListeToCsv(teilnehmerinnnenListe) {
    return teilnehmerinnnenListe.reduce((string, teilnehmer) =>  string + teilnehmer._name + ', ', "");
}

/*
    IndexedDb Operation, initialisiert und holt alle Projekte per Cursor anstatt per getAll()
    Vorteil hierbei ist, das wir durch die Datenbank iterieren können und nur die benötigte Anzahl der Projekte
    holen können.

    Diese Projekte werden direkt an die Elemente im Frontend weitergereicht.

    param: anzahlDerBenoetigtenProjekte => Anzahl der zu ladenden Projekte

    Autor: Ben Ansohn McDougall
 */
const nProjekteAusDbLaden = (anzahlDerBenoetigtenProjekte) => {
    const indexedDb = new IndexedDB();
    indexedDb.initialize().then((db) => {
        const projektVerzeichnis = [];
        const cursorRequest = indexedDb.retrieveItemsWithCursor(db);
        cursorRequest.onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor) {
                if (projektVerzeichnis.length < anzahlDerBenoetigtenProjekte) {
                    projektVerzeichnis.push(cursor.value);
                    cursor.continue();
                }
            } else {
                // Da keine Elemente mehr im ObjectStore sind können wir abbrechen.
                console.log(`Es wurden ${projektVerzeichnis.length} ${indexedDb.objectStoreName} per Cursor geholt`);
                GruppenAusfuellen(projektVerzeichnis);
            }
            // TODO: Dinge die man nun auf der index.html initialisiseren kann, z.B. Tabs, Aufgaben
            // Tabs initialisieren
        }

        cursorRequest.onerror = (event) => {
            console.error(`Beim aufrufen der ${indexedDb.objectStoreName} per IDBCursor,
                    ist folgender Fehler aufgetreten: ${cursorRequest.errorCode}`);
        }
    });
}
nProjekteAusDbLaden(4);


/*
    Ende IndexedDb
 */
