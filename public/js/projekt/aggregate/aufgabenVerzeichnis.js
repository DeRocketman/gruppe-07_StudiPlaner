/*
    AufgabenVerzeichnis - Aufgaben für Projekt dürfen maximal 3 sein.
    Können leider nicht genutzt werden wie hier vorgesehen, da ansonsten nicht in der IndexedDB speicherbar.
    Müssten eine dto (Data transfer Object) bauen, damit die serialisierung funktionieren kann.
    Zeit ist dafür zu knapp und passt nicht in das Zeitfenster und dem Umfang dieses Projekts

    Author: Benjamin McDougall, nachträgliches Refactoring mit Louis Grümmer.
 */
import {Aufgabe} from "../domain/aufgabe.js";

export class AufgabenVerzeichnis {
    _verzeichnis = new Array(3);

    constructor(aufgaben = new Aufgabe()) {

        this._verzeichnis[0] = aufgaben;
        this._verzeichnis[1] = new Aufgabe('Aufgabentext', false);
        this._verzeichnis[2] = new Aufgabe('Aufgabentext', false);
    }


    /*
        IndexedDB können keine Funktionen speichern, weswegen wir auf diese Klasse verzichten müssen.
     */
    add = (aufgaben) => {
        const istAufgabenVerzeichnisVoll = this._verzeichnis.length === 3;
        if(istAufgabenVerzeichnisVoll) {
            this._verzeichnis.pop();
            this._verzeichnis[2] = this._verzeichnis[1];
            this._verzeichnis[1] = this._verzeichnis[0];
            this._verzeichnis[0] = aufgaben;

        }
        return this._verzeichnis;
    }
}
