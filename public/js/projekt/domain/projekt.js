/*
   Klasse zum anlegen eines neuen Projekts der Projektseite
 */
import {Teilnehmerin} from "./teilnehmerin.js";
import {Aufgabe} from "./aufgabe.js";
import {Literaturverzeichnis} from "../aggregate/literaturverzeichnis.js";
import {LinkVerzeichnis} from "../aggregate/linkVerzeichnis.js";
import {Aufgabenverzeichnis} from "../aggregate/aufgabenverzeichnis.js";


// TODO: Aktiviert muss refactored werden.
//       Nummer automatisch in db generieren.
export class Projekt {
    _nummer;
    _aktiviert;
    _name;
    _teilnehmerListe;
    _literaturVerzeichnis;
    _notizen;
    _links;
    _aufgaben;
    constructor(nummer, aktiviert = true, name = 'Klick hier',
                teilnehmerListe = [new Teilnehmerin()],
                literaturverzeichnis = new Literaturverzeichnis(),
                links = new LinkVerzeichnis(),
                notizen = 'Notizen zum Projekt',
                aufgaben = new Aufgabenverzeichnis()){
        this._nummer = nummer;
        this._aktiviert = aktiviert;
        this._name = name;
        this._teilnehmerListe = teilnehmerListe;
        this._literaturVerzeichnis = literaturverzeichnis;
        this._links = links;
        this._notizen = notizen;
        this._aufgaben = aufgaben;
    }
}
