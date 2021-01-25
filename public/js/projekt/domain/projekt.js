/*
   Material - Klasse zum anlegen eines neuen Projekts der Projektseite
   Author: Benjamin McDougall

 */
import {Teilnehmerin} from "./teilnehmerin.js";
import {Aufgabe} from "./aufgabe.js";
import {Literatur} from "./literatur.js";
import {Link} from "./link.js";


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
    _pieSize;

    constructor(nummer = Math.round(Math.random() * 100000000), aktiviert = true, name = 'Klick hier',
                teilnehmerListe = [new Teilnehmerin()],
                literaturverzeichnis = [new Literatur()],
                links = [new Link()],
                notizen = 'Notizen zum Projekt',
                aufgaben = [new Aufgabe()],
                pieSize = [500,400,300]) {
        this._nummer = nummer;
        this._aktiviert = aktiviert;
        this._name = name;
        this._teilnehmerListe = teilnehmerListe;
        this._literaturVerzeichnis = literaturverzeichnis;
        this._links = links;
        this._notizen = notizen;
        this._aufgaben = aufgaben;
        this._pieSize = pieSize;
    }
}
