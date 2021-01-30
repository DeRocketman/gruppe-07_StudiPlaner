import { Termin } from './termin.js'

// Reines Modul um die verschiedenen Monate im Speicher zwischen zu speichern anstatt diese
// immer wieder generieren zu müssen.
// Author: Benjamin Ansohn McDougall

/*
    Stellt einen Monat im Kontext eines Kalenders dar.
    Wichtig für die Darstellung sind hier der erste Tag des Monats.
    Wieviele Tage der Monat hat, um welchen Monat es sich handelt und
    eine Liste von Terminen die in diesem Monat hinterlegt sind.

    Ist leider nicht zum Einsatz gekommen aus zeitlichen Gründen.
    Sollte zur Übersicht eines gesamten Monats genutzt werden und eventuell um
    die Termin zu teilen/exportieren.
 */
export class Monat {
    constructor(firstDay = 1, numOfDays = 30, monthNumber = 1, termine = [new Termin()]) {
        this.firstDay = firstDay;
        this.countDays = numOfDays;
        this.monthNumber = monthNumber;
        this.termine = termine;
    }
}
