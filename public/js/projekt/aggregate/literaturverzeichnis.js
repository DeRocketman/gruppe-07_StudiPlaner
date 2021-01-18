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

    // TODO: hier ist noch ein Bug

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
// for( let i = 0; i<=_verzeichnis.length; i++){
//    _verzeichnis.push(_verzeichnis[i]);
//}

