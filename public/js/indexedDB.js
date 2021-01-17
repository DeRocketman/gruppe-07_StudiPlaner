/*
    js-Datei fuer die IndexedDB
 */

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
        keyPath: "pid",
        autoIncrement: true,
    });

    //Grunddaten
    objectStore.createIndex("nummer", "nummer", { unique: true });
}

/**
 * @param {IDBDatabase} db
 * @param {IDBTransaction} transaction
 */
function to1(db, transaction) {
    const projectStore = transaction.objectStore("Projekte");
    projectStore.createIndex("done", "done", { unique: false });
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
