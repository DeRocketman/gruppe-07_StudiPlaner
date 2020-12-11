/*
   Klasse zum anlegen eines neuen Projekts der Projektseite
 */
import {Teilnehmerin} from "./teilnehmerin.js";
import {Aufgabe} from "./aufgabe.js";
import {Literaturverzeichnis} from "../aggregate/literaturverzeichnis.js";
import {LinkVerzeichnis} from "../aggregate/linkVerzeichnis.js";

export class Projekt {
    _nummer;
    _aktiviert;
    _name;
    _teilnehmerListe;
    _literaturVerzeichnis;
    _notizen;
    _links;
    _aufgaben;
    constructor(nummer = 1, aktiviert = true, name = 'Klick hier',
                teilnehmerListe = [new Teilnehmerin()],
                literaturverzeichnis = new Literaturverzeichnis(),
                links = new LinkVerzeichnis(),
                notizen = 'Notizen zum Projekt',
                aufgaben = [new Aufgabe(), new Aufgabe('Dingens', true),
                new Aufgabe('Dritte Aufgabe', false)]) {
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
