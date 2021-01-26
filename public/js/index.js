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
    Füllt die GruppenTabs mit den tatsächlichen Einträgen aus den Projekten aus.
    Autor: Ben Ansohn McDougall
 */
function GruppenAusfuellen(projektVerzeichnis) {
    const teilnehmerinnenString1 = formatiereTeilnehmerInnen(projektVerzeichnis[0]._teilnehmerListe);
    const teilnehmerinnenString2 = formatiereTeilnehmerInnen(projektVerzeichnis[1]._teilnehmerListe);
    const teilnehmerinnenString3 = formatiereTeilnehmerInnen(projektVerzeichnis[2]._teilnehmerListe);
    const teilnehmerinnenString4 = formatiereTeilnehmerInnen(projektVerzeichnis[3]._teilnehmerListe);

    document.getElementById('group1').innerHTML =`${projektVerzeichnis[0]._name} <br/> ${teilnehmerinnenString1}`;
    document.getElementById('group2').innerHTML = `${projektVerzeichnis[1]._name} <br/> ${teilnehmerinnenString2}`;
    document.getElementById('group3').innerHTML = `${projektVerzeichnis[2]._name} <br/> ${teilnehmerinnenString3}`;
    document.getElementById('group4').innerHTML = `${projektVerzeichnis[3]._name} <br/> ${teilnehmerinnenString4}`;
}

/*
    Hilfsfunktion um die Teilnehmerinnen auszupacken.
    Autor: Ben Ansohn McDougall
 */
function formatiereTeilnehmerInnen(teilnehmerinnnenListe) {
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
