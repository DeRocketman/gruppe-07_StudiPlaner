/*
    Aufgabe zu einem Projekt.
    Author: Benjamin McDougall und Dirk Stricker
 */
export class Aufgabe {
    _beschreibung;
    _istErledigt;
    _deadline;
    _teilnehmerinnenListe;
    constructor(beschreibung = 'Text zur Aufgabe', istErledigt = false) {
        this._beschreibung = beschreibung;
        this._istErledigt = istErledigt;
    }
}
