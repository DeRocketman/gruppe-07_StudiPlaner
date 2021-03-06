/*
    Stellt einen Termin - Tag im Kalender - dar
    Ein Termin hat ein Datum, eine Art der Veranstaltung, eine Menge von Teilnehmerinnen, es kann ein
    Einzeltermin oder eine Terminserie sein und es können weiter Informationen in Form eines Freitextes angeheftet
    werden.

    Autor: Ben Ansohn McDougall
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
}
