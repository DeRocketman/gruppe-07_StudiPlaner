/*
    LiteraturVerzeichnis - Literaturangaben für Projekte, dürfen maximal drei sein
    Können leider nicht genutzt werden wie hier vorgesehen, da ansonsten nicht in der IndexedDB speicherbar.
    Müssten eine dto (Data transfer Object) bauen, damit die serialisierung funktionieren kann.
    Zeit ist dafür zu knapp und passt nicht in das Zeitfenster und dem Umfang dieses Projekts

    Author: Benjamin McDougall und Dirk Stricker, nachträgliches Refactoring mit Louis Grümmer.
 */
import {Literatur} from "../domain/literatur.js";

export class LiteraturVerzeichnis {

    _verzeichnis = new Array(3);

    constructor(literatur = new Literatur()) {
        this._verzeichnis[0] = literatur;
        this._verzeichnis[1] = new Literatur('Leer')
        this._verzeichnis[2] = new Literatur('Leer')
    }


    add = (literatur) => {
        const istLiteraturVerzeichnisVoll = this._verzeichnis.length === 3;
        if (istLiteraturVerzeichnisVoll) {
            this._verzeichnis.pop();
            this._verzeichnis[2] = this._verzeichnis[1];
            this._verzeichnis[1] = this._verzeichnis[0];
            this._verzeichnis[0] = literatur;

        }
        return this._verzeichnis;
    }


}


