/*
    Literaturverzeichnis - Literaturangaben für Projekte, dürfen maximal drei sein
 */
import {Literatur} from "../domain/literatur.js";

export class Literaturverzeichnis {
    _verzeichnis = new Array(3);
    constructor(literatur = new Literatur()) {
        this._verzeichnis[0] = literatur;
        this._verzeichnis[1] = new Literatur('Leer')
        this._verzeichnis[2] = new Literatur('Leer')
    }

    add = (literatur) => {
        const istLiteraturVerzeichnisVoll = this._verzeichnis.length === 3;
        if(istLiteraturVerzeichnisVoll) {
            this._verzeichnis.pop();
        }
        return this._verzeichnis.push(literatur);
    }

    erstes = () => this._verzeichnis[0];
    zweites = () => this._verzeichnis[1];
    drittes = () => this._verzeichnis[2];
}
