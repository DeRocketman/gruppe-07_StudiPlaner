/*
Stellt einen Termin - Tag im Kalender dar
 */
export class Termin {
    constructor(datum = '2021-12-04', text = 'Hier könnte ihr Termin stehen') {
        this.datum = datum;
        this.text = text;
    }
    toString = () => `Termin für den ${this.datum}: ${this.text}`;
}
