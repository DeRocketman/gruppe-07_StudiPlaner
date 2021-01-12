/*
Stellt einen Termin - Tag im Kalender dar
 */
export class Termin {
    constructor(datum = '2021-12-04', veranstaltungsArt = 'Vorlesung', teilnehmer = [],
                einzelTerminOderSerie = false,  text = 'Hier könnte ihr Termin stehen') {
        this.teilnehmer = teilnehmer;
        this.einzelTerminOderSerie = einzelTerminOderSerie;
        this.veranstaltungsArt = veranstaltungsArt;
        this.datum = datum;
        this.text = text;
    }
    toString = () => `Termin für den ${this.datum}: ${this.text}`;
}
