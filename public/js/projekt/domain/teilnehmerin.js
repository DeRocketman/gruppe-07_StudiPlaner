/*
TeilnehmerInnen eines Projekts
 */
export class Teilnehmerin {
    _name;
    _email;
    constructor(name = 'Unbesetzt', email = 'Keine') {
        this._name = name;
        this._email = email;
    }
}