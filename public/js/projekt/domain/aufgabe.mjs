/*
    Aufgabe zu einem Projekt.
 */
export class Aufgabe {
    _beschreibung;
    _istErledigt;
    _deadline;
    _teilnehmerinnenListe;
    constructor(beschreibung = 'Text zur Aufgabe', istErledigt = false,
                deadline = new Date(), teilnehmerinnenListe = {}) {
        this._beschreibung = beschreibung;
        this._istErledigt = istErledigt;
        this._deadline = deadline;
        this._teilnehmerinnenListe = teilnehmerinnenListe;
    }
}
