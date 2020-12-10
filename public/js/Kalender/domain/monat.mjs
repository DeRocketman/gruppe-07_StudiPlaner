import { Termin } from './Termin'

// Reines Modul um die verschiedenen Monate im Speicher zwischen zu speichern anstatt diese
// immer wieder generieren zu müssen.
export class Monat {
    constructor(firstDay = 1, numOfDays = 30, monthNumber = 1, termine = {}) {
        this.firstDay = firstDay;
        this.countDays = numOfDays;
        this.monthNumber = monthNumber;
        this.termine = termine;
    }
}
