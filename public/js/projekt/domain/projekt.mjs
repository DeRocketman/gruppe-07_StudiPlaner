/*
   Klasse zum anlegen eines neuen Projekts der Projektseite
 */
import {Teilnehmerin} from "./teilnehmerin.mjs";
import {Aufgabe} from "./aufgabe.mjs";
import {Literaturverzeichnis} from "../aggregate/literaturverzeichnis.mjs";
import {LinkVerzeichnis} from "../aggregate/linkVerzeichnis.mjs";

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
