/*
    Fachwert - Link für die jeweiligen Projekte
    Author: Benjamin McDougall
 */
export class Link {
    _url;
    _beschreibung;
    constructor(url = 'https://www.example.de', beschreibung = 'Beschreibung') {
        this._url = url;
        this._beschreibung = beschreibung;
    }
}
