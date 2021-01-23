/*
    js-Datei für die IndexedDB
 */

import {Projekt} from "./projekt/domain/projekt.js";
import {BeispielProjekt} from "./projekt/repository/beispielProjekt.js";
import {BeispielProjekt2} from "./projekt/repository/beispielProjekt2.js";

export class IndexedDB {
    _db
    constructor(dbName = 'WPGruppe07', dbVersion = 3, objectStore = "Projekte") {
        this.dbName = dbName;
        this.dbVersion = dbVersion;
        this.objectStoreName = objectStore;
        this.projekte = [new Projekt(), BeispielProjekt(), BeispielProjekt2()];
    }

    /*
        Initialisiert die IndexDB mit dem DB Namen und der Version falls noch nicht vorhanden. Legt zudem noch 3
        Beispielprojekte an.
        Prüft zugleich ob der Browser Kompatibel ist.
        Gibt bei Misserfolg eine Fehlermeldung mit FehlerCode aus.
        Gibt bei Erfolg in der Console eine Meldung zurück und die IDBFactory.

        Grob orientiert an den Best-Pratices von den MDN Seiten:
        https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
        https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
     */
    initialize = () => {
        // Prüft ob indexedDB im aktuellen Browser verfügbar ist.
        if (!window.indexedDB) {
            alert('Leider unterstützt Dein Browser keine IndexedDb :-/');
        } else {
            const request = window.indexedDB.open(this.dbName, this.dbVersion);

            // Falls die Datenbank noch nicht erstellt oder die Versionsnummer
            // verändert wurde
            request.onupgradeneeded = (event) => {
                // Hier ist das Result ein IDBDatabase
                const db = event.target.result;

                const objectStore = db.createObjectStore(this.objectStoreName,
                    {keyPath: "nummer", autoIncrement: true});

                // Damit wir die db besser durchsuchen können, legen wir
                // hier einen Index für die Namen an.
                objectStore.createIndex("name", "name");

                // Wenn alle Transaktionen erfolgreich waren werden die drei Beispielprojekte angelegt.
                objectStore.transaction.oncomplete = () => {
                    const projekteObjectStore = db.transaction(this.objectStoreName, "readwrite")
                        .objectStore(this.objectStoreName);
                    this.projekte.forEach((projekt) => {
                        console.log(`Fügt ${projekt._literaturVerzeichnis} hinzu`);
                        projekteObjectStore.add(projekt);
                    });
                }
            };

            // Abfangen ob die Verbindung nicht erfolgreich war
            request.onerror = (event) => {
                console.log(`Die Verbindung zur IndexedDB ${this.dbName} ist leider fehlgeschlagen:
                ${event.target.errorCode}`);
            };

            // Abfangen ob die Verbindung erfolgreich war.
            request.onsuccess = async (event) => {
                console.log(`IndexedDb ${this.dbName} mit der Version ${this.dbVersion}`);
                this._db = await event.target.result;
            };
        }
    }

    /*
        Gibt anhand eines Schlüssels das entsprechnede Objekt zurück
     */
    retrieve = (key) => {
        console.log(`wir haben eine ${this._db} Datenbank`);
        this._db.objectStore(this.objectStoreName).get(key).onsuccess = (event) => {
            return event.target.result;
        }
    }
}


// /**
//  * @returns {Promise<IDBDatabase>}
//  */
// export async function openDB() {
//     return new Promise((resolve, reject) => {
//         const request = indexedDB.open(DB_NAME, DB_VERSION);
//
//         request.onerror = reject;
//
//         request.onupgradeneeded = (ev) => {
//             const { oldVersion, newVersion } = ev;
//             const db = ev.target.result;
//             const versionChangeTransaction = ev.target.transaction;
//
//             migrations
//                 .slice(oldVersion, newVersion)
//                 .forEach((migration) => migration(db, versionChangeTransaction));
//         };
//
//         request.onsuccess = () => resolve(request.result);
//     });
// }
//
// //#region Migrations
// function initialize(db) {
//
//     const objectStoreName = db.createObjectStore("Projekte", {
//         keyPath: "pid",
//         autoIncrement: true,
//     });
//
//     //Grunddaten
//     objectStoreName.createIndex("nummer", "nummer", { unique: true });
// }
//
// /**
//  * @param {IDBDatabase} db
//  * @param {IDBTransaction} transaction
//  */
// function to1(db, transaction) {
//     const projectStore = transaction.objectStoreName("Projekte");
//     projectStore.createIndex("done", "done", { unique: false });
// }
// /**
//  * These are the migrations that need to be run from version X to current Version
//  */
// const migrations = [initialize, to1];
// //#endregion Migrations
//
// openDB().then((db) => {
//     const objectStoreName = db
//         .transaction(["Projekte"], "readwrite")
//         .objectStoreName("Projekte");
// });
