/*
    js-Datei fuer die IndexedDB
 */
//
// Let us open our database
const DB_VERSION = 2;
const DB_NAME = "WPGruppe07";

/**
 * @returns {Promise<IDBDatabase>}
 */
export async function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = reject;

        request.onupgradeneeded = (ev) => {
            const { oldVersion, newVersion } = ev;
            const db = ev.target.result;
            const versionChangeTransaction = ev.target.transaction;

            migrations
                .slice(oldVersion, newVersion)
                .forEach((migration) => migration(db, versionChangeTransaction));
        };

        request.onsuccess = () => resolve(request.result);
    });
}

//#region Migrations
function initialize(db) {
    const objectStore = db.createObjectStore("Projekte", {
        keyPath: "id",
        autoIncrement: true,
    });

    //Grunddaten
    objectStore.createIndex("nummer", "nummer", { unique: true });
    objectStore.createIndex("projektbezeichnung", "projektbezeichnung", { unique: false });
//Teilenehmer
    objectStore.createIndex("tn1name", "tn1name", { unique: false });
    objectStore.createIndex("tn1mail", "tn1mail", { unique: false });
    objectStore.createIndex("tn2name", "tn2name", { unique: false });
    objectStore.createIndex("tn2mail", "tn2mail", { unique: false });
    objectStore.createIndex("tn3name", "tn3name", { unique: false });
    objectStore.createIndex("tn3mail", "tn3mail", { unique: false });
    objectStore.createIndex("tn4name", "tn4name", { unique: false });
    objectStore.createIndex("tn4mail", "tn4mail", { unique: false });
    objectStore.createIndex("tn5name", "tn5name", { unique: false });
    objectStore.createIndex("tn5mail", "tn5mail", { unique: false });
    objectStore.createIndex("tn6name", "tn6name", { unique: false });
    objectStore.createIndex("tn6mail", "tn6mail", { unique: false });
    objectStore.createIndex("tn7name", "tn7name", { unique: false });
    objectStore.createIndex("tn7mail", "tn7mail", { unique: false });
    objectStore.createIndex("tn8name", "tn8name", { unique: false });
    objectStore.createIndex("tn8mail", "tn8mail", { unique: false });
    objectStore.createIndex("tn9name", "tn9name", { unique: false });
    objectStore.createIndex("tn9mail", "tn9mail", { unique: false });
//PieChart
    objectStore.createIndex("piechartdone", "piechartdone", { unique: false });
    objectStore.createIndex("piechartdo", "piechartdo", { unique: false });
    objectStore.createIndex("piecharttodo", "piecharttodo", { unique: false });
//Literatur
    objectStore.createIndex("lit1", "lit1", { unique: false });
    objectStore.createIndex("lit2", "lit2", { unique: false });
    objectStore.createIndex("lit3", "lit3", { unique: false });
//Links
    objectStore.createIndex("link1ref", "link1ref",{ unique: false });
    objectStore.createIndex("link1text", "link1text",{ unique: false });
    objectStore.createIndex("link2ref", "link3ref",{ unique: false });
    objectStore.createIndex("link2text", "link3text",{ unique: false });
    objectStore.createIndex("link3ref", "link3ref",{ unique: false });
    objectStore.createIndex("link3text", "link3text",{ unique: false });
//Aufgabe
    objectStore.createIndex("aufgabe1text", "aufgabe1text", { unique: false })
    objectStore.createIndex("aufgabe1box", "aufgabe1box", { unique: false })
    objectStore.createIndex("aufgabe2text", "aufgabe2text", { unique: false })
    objectStore.createIndex("aufgabe2box", "aufgabe2box", { unique: false })
    objectStore.createIndex("aufgabe3text", "aufgabe3text", { unique: false })
    objectStore.createIndex("aufgabe3box", "aufgabe3box", { unique: false })
}
/**
 * @param {IDBDatabase} db
 * @param {IDBTransaction} transaction
 */
function to1(db, transaction) {
    const todoStore = transaction.objectStore("Projekte");
    todoStore.createIndex("done", "done", { unique: false });
}
/**
 * These are the migrations that need to be run from version X to current Version
 */
const migrations = [initialize, to1];
//#endregion Migrations

openDB().then((db) => {
    const objectStore = db
        .transaction(["Projekte"], "readwrite")
        .objectStore("Projekte");
});

