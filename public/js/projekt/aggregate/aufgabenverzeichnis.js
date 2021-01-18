/*
    Aufgabenverzeichnis - Aufgaben für Projekt dürfen maximal 3 sein.
 */
import {Aufgabe} from "../domain/aufgabe.js";

export class Aufgabenverzeichnis {
    _verzeichnis = new Array(3);

    constructor(aufgaben = new Aufgabe()) {

        this._verzeichnis[0] = aufgaben;
        this._verzeichnis[1] = new Aufgabe('Aufgabentext', false);
        this._verzeichnis[2] = new Aufgabe('Aufgabentext', false);
    }


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