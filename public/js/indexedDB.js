/*
    js-Datei für die IndexedDB

    Autoren: Dirk Stricker, Louis Grümmer und Benjamin Ansohn McDougall
 */
import {Projekt} from "./projekt/domain/projekt.js";
import {BeispielProjekt} from "./projekt/repository/beispielProjekt.js";
import {BeispielProjekt2} from "./projekt/repository/beispielProjekt2.js";

export class IndexedDB {
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
        return new Promise(((resolve, reject) => {
            // Prüft ob indexedDB im aktuellen Browser verfügbar ist.
            if (!window.indexedDB) {
                alert('Leider unterstützt Dein Browser keine IndexedDb :-/');
            } else {
                const requestToOpenDb = window.indexedDB.open(this.dbName, this.dbVersion);

                // Falls die Datenbank noch nicht erstellt oder die Versionsnummer
                // verändert wurde
                requestToOpenDb.onupgradeneeded = (event) => {
                    // Hier ist das Result ein IDBDatabase
                    const db = requestToOpenDb.result;

                    const objectStore = db.createObjectStore(this.objectStoreName,
                        {keyPath: "_nummer", autoIncrement: true});

                    // Damit wir die db besser durchsuchen können, legen wir
                    // hier einen Index für die Namen an.
                    objectStore.createIndex("_name", "_name");

                    // Wenn alle Transaktionen erfolgreich waren werden die drei Beispielprojekte angelegt.
                    objectStore.transaction.oncomplete = () => {
                        const projekteObjectStore = db.transaction(this.objectStoreName, "readwrite")
                            .objectStore(this.objectStoreName);
                        this.projekte.forEach((projekt) => {
                            projekteObjectStore.put(projekt);
                        });
                    }
                };

                // Abfangen ob die Verbindung nicht erfolgreich war
                requestToOpenDb.onerror = (event) => {
                    reject(`Die Verbindung zur IndexedDB ${this.dbName} ist leider fehlgeschlagen:
                ${requestToOpenDb.errorCode} ${requestToOpenDb.errorDetail}`);
                };

                // Abfangen ob die Verbindung erfolgreich war.
                requestToOpenDb.onsuccess = (event) => {
                    const db = requestToOpenDb.result;
                    console.log(`IndexedDb ${this.dbName} mit der Version ${this.dbVersion}: ${db.name}`);
                    resolve(db);
                };
            }
        }));
    }

    /*
        Gibt anhand eines Schlüssels das entsprechnede Objekt zurück
     */
    retrieveOneItemVia_nummer = function (db, nummer) {
        return new Promise((resolve, reject) => {
                // Vertrag Schutz vor falschen Daten
                const parameterIsANumber = !Number.isNaN(nummer);
                if (parameterIsANumber) {
                    const objectStore = db.transaction([this.objectStoreName], 'readonly')
                        .objectStore(this.objectStoreName);
                    const objectStoreRequest = objectStore.get(nummer);

                    objectStoreRequest.onerror = () => {
                        console.log(`Bei der Übertragung ist etwas schiefgelaufen:
                    ${objectStoreRequest.errorCode} ${objectStoreRequest.errorDetail}`);
                        reject(`Siehe Console log`);
                    };

                    objectStoreRequest.onsuccess = (event) => {
                        resolve(objectStoreRequest.result);
                        db.close();
                    };
                }

            }
        );
    }

    /*
        Gibt anhand eines Schlüssels das entsprechnede Objekt zurück
     */
    retrieveAllProjekts = () => {
        const requestToOpenDb = window.indexedDB.open(this.dbName, this.dbVersion);

        requestToOpenDb.onsuccess = (event) => {
            const db = requestToOpenDb.result;
            const objectStore = db.transaction([this.objectStoreName], 'readonly')
                .objectStore(this.objectStoreName);
            const objectStoreRequest = objectStore.getAll();

            objectStoreRequest.onerror = () => {
                console.log(`Bei der Übertragung ist etwas schiefgelaufen:
                    ${objectStoreRequest.errorCode} ${objectStoreRequest.errorDetail}`);
            };

            objectStoreRequest.onsuccess = (event) => {
                console.log(objectStoreRequest.result);
            };
        }
    }

    speichern = (object) => {
        if (object != null) {
            const request = window.indexedDB.open(this.dbName, this.dbVersion);

            request.onsuccess = (event) => {
                const openDb = request.result;

                const transaction = openDb.transaction(this.objectStoreName, "readwrite");
                const objectStore = transaction.objectStore(this.objectStoreName);

                objectStore.put(object);

                openDb.transaction.oncomplete = () => {
                    console.log(`${object} wurde in ${this.objectStoreName} erfolgreich gespeichert.`);
                }

                openDb.onerror = () => {
                    console.log(`Beim Speichern des Projekts: ${object} in ${this.objectStoreName} 
                    ist folgender Fehler aufgetreten: ${openDb.errorCode}`);
                }
            }
        }
    }
}
