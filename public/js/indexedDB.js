import {Projekt} from "./projekt/domain/projekt.js";
import {BeispielProjekt} from "./projekt/repository/beispielProjekt.js";
import {BeispielProjekt2} from "./projekt/repository/beispielProjekt2.js";
import {BeispielProjekt3} from "./projekt/repository/beispielProjekt3.js";
import {BeispielProjekt4} from "./projekt/repository/beispielProjekt4.js";
import {BeispielProjekt5} from "./projekt/repository/beispielProjekt5.js";
import {
    beispielTermin1,
    beispielTermin2,
    beispielTermin3,
    beispielTermin4,
    beispielTermin5
} from "./Kalender/repository/beispielTermine.js";

/*
    Erstellt ein neues IndexedDb Object.
    Zudem werden zu Testzwecken zudem noch einige Objekte zu Testzwecken angelegt.

    Felder: dbName = Name der Datenbank, dbVersion = Version der Datenbank, objectStore  = Tabellenname

    Autoren: Dirk Stricker, Louis Grümmer und Benjamin Ansohn McDougall
 */
export class IndexedDB {
    constructor(dbName = 'WPGruppe07', dbVersion = 3, objectStore = "Projekte") {
        this.dbName = dbName;
        this.dbVersion = dbVersion;
        this.objectStoreName = objectStore;
        this.projekte = [BeispielProjekt(), BeispielProjekt2(), BeispielProjekt3(), BeispielProjekt4(), BeispielProjekt5()];
        this.termine = [beispielTermin1, beispielTermin2, beispielTermin3, beispielTermin4, beispielTermin5];
    }

    /*
        Initialisiert die IndexDB mit dem DB Namen und der Version falls noch nicht vorhanden. Legt zudem noch einige
        Beispielobjekte an je nachdem ob es sich um Projekte oder Termine handelt.
        Prüft zugleich ob der Browser Kompatibel ist.
        Gibt bei Misserfolg eine Fehlermeldung mit FehlerCode aus.
        Gibt bei Erfolg in der Console eine Meldung zurück und die IDBFactory.

        Grob orientiert an den Best-Pratices von den MDN Seiten:
        https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
        https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

        Returns (onsuccess) => IDBDatabase

        Autor: Benjamin Ansohn McDougall, POC: Dirk Stricker
     */
    initialize = () => {
        /*
            Private Methode um das ObjectStore für die Projekte anzulegen

            Autor: Benjamin Ansohn McDougall
         */
        function createObjectStores(db) {
            const projektObjectStore = db.createObjectStore('Projekte',
                {keyPath: "_nummer", autoIncrement: true});

            // Damit wir die db besser durchsuchen können, legen wir
            // hier einen Index für die Namen an.
            projektObjectStore.createIndex("_name", "_name");

            db.createObjectStore('Termine',
                {keyPath: "datum", autoIncrement: false})
                .createIndex("Veranstalungsart", "veranstaltungsArt");

            // Wenn alle Transaktionen erfolgreich waren werden die drei Beispielprojekte angelegt.
            projektObjectStore.transaction.oncomplete = () => {
                const projekteObjectStore = db.transaction('Projekte', "readwrite")
                    .objectStore('Projekte');
                this.projekte.forEach((projekt) => {
                    projekteObjectStore.put(projekt);
                });
                const termineObjectStore = db.transaction('Termine', "readwrite")
                    .objectStore('Termine');
                this.termine.forEach((termin) => {
                    termineObjectStore.put(termin);
                });
            }
        }


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

                        createObjectStores.call(this, db);
                    };

                    // Abfangen ob die Verbindung nicht erfolgreich war
                    requestToOpenDb.onerror = (event) => {
                        console.error(`Die Verbindung zur IndexedDB ${this.dbName} ist leider fehlgeschlagen:
                ${requestToOpenDb.errorCode} ${requestToOpenDb.errorDetail}`);
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
            Holt N Objekte via Cursor aus dem ObjectStore.
            In dieser Funktion nutzen wir den Cursor um im besten Fall n Elemente
            aus der Datenbank zu lesen. Falls nicht genügend Elemente in dem ObjectStore
            vorhanden sind, werden die maximal verfügbaren Objekte returned.

            returns IDBRequest(IDBCursor)

            Autor: Ben Ansohn McDougall
         */
        retrieveItemsWithCursor = (db) => {
            const objectStore = db.transaction([this.objectStoreName], 'readonly').objectStore(this.objectStoreName);
            return objectStore.openCursor();
        }

        /*
            Holt alle Objekte aus einem ObjectStore
         */
        retrieveAllProjekts = db => {
            const objectStore = db.transaction([this.objectStoreName], 'readonly')
                .objectStore(this.objectStoreName);
            return objectStore.getAll();
        };


        speichern = (db, object) => {
            const isObject = object != null;
            console.log("Speicherung beginnt " + object._name + ' ' + db);
            if (isObject) {

                const transaction = db.transaction(this.objectStoreName, "readwrite");
                const objectStore = transaction.objectStore(this.objectStoreName);

                return objectStore.put(object);
            }
        }

        /*
            Ruft Einträge aus der IndexedDb, anhand des Projektnamens ab.

            params: db = IDBDatabase, projektName = Projekt._name
            Returns IDBRequest

            Author: Benjamin Ansohn McDougall
         */
        get = (db, projektName) => {
            const isNotProjektNameEmpty = projektName.length > 0;
            if (isNotProjektNameEmpty) {
                const objectStore = db.transaction([this.objectStoreName], 'readonly')
                    .objectStore(this.objectStoreName);
                return objectStore.get(projektName);
            }
        }

        /*
            Sucht Einträge aus der IndexDb, anhand des Projektnamens

            params: db = IDBDatabase, projektName = Projekt._name
            Returns IDBIndex

            Author: Benjamin Ansohn McDougall
         */
        searchViaIndex = (db, projektName, indexName) => {
            const areParamsNotEmpty = projektName.length > 0 && indexName.length > 0;
            if (areParamsNotEmpty) {
                const objectStore = db.transaction([this.objectStoreName], 'readwrite')
                    .objectStore(this.objectStoreName);
                return objectStore.index(indexName);
            }
        }
    }

