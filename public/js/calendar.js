/*
Klasse um grundlegende Kalender Eigenschaften zu definieren.
params: Date, default derzeitige Datum
 */
class Calendar {
    constructor(date = new Date()) {
        this.currentDate = date;
        this.year = this.currentDate.getUTCFullYear();
        this.month = this.currentDate.getMonth();
        this.day = this.currentDate.getDate();
        this.weekday = this.currentDate.getDay();
        this.monthsName = this.nameOfMonth();
        this.daysName = this.nameOfDay();
        this.numberOfDaysMonth = this.daysOfMonth();
        // wird in fillCalendar berechnet
        this.firstWeekdayOfMonth = 0;
    }

    toString = () =>
        `Heute ist ${this.daysName} der ${this.day}. ${this.monthsName} ${this.year} mit ${this.numberOfDaysMonth} Tagen`;

    toShortString = () =>
        `${this.day}.${this.monthsName}.${this.year}`;

    // Brauchen hier für den DatePicker im calendarEntry noch zur initialisierung noch einen vernünftigen Wert.
    toDatePickerString = () =>
        `${this.year}-${this.month}-${this.day}`;

    /*
    Ermittelt den aktuellen Monat, falls keine Parameter mitgegeben wird
     */
    nameOfMonth = (month = this.month) => ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli'
        , 'August', 'September', 'Oktober', 'November', 'Dezember'][month];

    /*
    Ermittelt den aktuellen Wochentag, falls kein Parameter mitgegeben wird.
     */
    nameOfDay = (weekday = this.weekday) =>
        ['fehlerInNameOfDay', 'Montag', 'Dienstag', 'Mittwoch',
            'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'][weekday];

    /*
    Berechnet die Anzahl der Tage im Monat zur Darstellung im Calendar.
    Wenn keine Parameter angegeben werden, werden die Standardwerte genommen.
     */
    daysOfMonth = function (month = this.month, year = this.year) {
        // Setzt die Anzahl der Tage direkt auf 31, da die meisten Monate diese
        // Anzahl an Tagen hat.
        let numberOfDaysInMonth = 31;

        // Private Funktion zur Berechnung ob es sich um ein Schaltjahr handelt.
        function daysOfFebruary() {
            const isLeapYear = year % 4 === 0;
            if (isLeapYear) {
                numberOfDaysInMonth = 29;
            } else {
                numberOfDaysInMonth = 28;
            }
        }

        const isThirtyDayMonth = [3, 5, 8, 10].includes(month);
        const isFebruary = month === 1;

        if (isThirtyDayMonth) {
            numberOfDaysInMonth = 30;
        } else if (isFebruary) {
            daysOfFebruary.call(this);
        }
        return numberOfDaysInMonth;
    }


    // Wechselt zum vorherigen Monat und berücksichtigt dabei Jahreswechsel
    prevMonth = function () {
        let isJanuary = cal.month === 0;

        if (isJanuary) {
            cal.month = 11;
            cal.year--;
        } else {
            cal.month--;
        }
        const previousCalendar = new Calendar(new Date(cal.year, cal.month, cal.day));
        previousCalendar.clearCalendar();
        previousCalendar.fillCalendar();
    }

    // Wechselt zum nächsten Monat und berücksichtigt dabei Jahreswechsel
    nextMonth = function () {
        let isDecember = this.month === 11;
        if (isDecember) {
            cal.month = 0;
            cal.year += 1;
            console.log(cal.year);
        } else {
            cal.month++;
        }
        const nextCalendar = new Calendar(new Date(cal.year, cal.month, cal.day));
        nextCalendar.clearCalendar();
        nextCalendar.fillCalendar();
    }

    // Füllt den Kalender mit Tagen, Monat und Jahresangabe
    fillCalendar = function () {
        // Interne Hilfsfunktion: Berechnet den ersten Tag des Monats
        function calculateFirstDayOfMonth() {
            let earliestDay = this.day % 7;
            let earliestWeekday = this.weekday;
            // // Falls wir noch nicht den ersten Tag des Monats haben.
            if (earliestDay !== 1) {
                while (earliestDay > 1) {
                    earliestDay--;
                    earliestWeekday--;
                    earliestWeekday = earliestWeekday < 0 ? earliestWeekday = 6 : earliestWeekday;
                }
            }
            return earliestWeekday;
        }

        let kalenderMonat = document.getElementById('kalender_monat');
        // Falls das HTML Document keine Referenzen hat werden hier keine Fehler geworfen.
        if (kalenderMonat) {
            // setzt den Monat im Kalender zu: Monat Jahr, z.B. Oktober 2020
            kalenderMonat.innerHTML = `${this.monthsName} ${this.year}`;
            this.firstWeekdayOfMonth = calculateFirstDayOfMonth.call(this);
            // erstellt Liste mit mit Tagen des Monats
            const listOfDays = [...Array(this.numberOfDaysMonth).keys()];
            // setzt den ersten Tag am entsprechenden Wochentag, wobei die Liste bei Null beginnt, hence day + 1.
            listOfDays.map(day => document.getElementById('kalender_eintrag_'
                + (this.firstWeekdayOfMonth + day)).innerHTML = day + 1);
        }
    }

    /*
    Leert alle Einträge aus dem HTML Kalender um einen neuen Kalender zu füllen, damit keine einzelnen Tage
    übrig bleiben, falls eins der vorherigen Monate früher begann aus der aktuelle
     */
    clearCalendar = () => {
        const answerToTheUltimateQuestionOfLifeTheUniverseAndEverything = 42;
        const kalenderTableDataEntries = [...Array(answerToTheUltimateQuestionOfLifeTheUniverseAndEverything).keys()];
        kalenderTableDataEntries.map(kalenderEntryTableData =>
            document.getElementById('kalender_eintrag_' + kalenderEntryTableData).innerHTML = '');
    }

    /*
    Hebt die position des aktuellen Tages im Kalender hervor.
     */
    highlightToday = () => {
        // da wir bei day + 1 im FillCalendar als letztes vornehmen, müssen wir hier
        // wieder ran und es abziehen.
        const calendarOffsetForToday = this.firstWeekdayOfMonth + this.day - 1;
        const todaysEntry = document.getElementById('kalender_eintrag_' + calendarOffsetForToday);
        todaysEntry.style.color = '#AB63A0';
        todaysEntry.style.fontWeight = 'bold';
    }

    setAppointment = function(appointmentDate) {
        // siehe highlightToday
        const offsetForAppointmentDate = this.firstWeekdayOfMonth + appointmentDate - 1;
        const appointmentEntry = document.getElementById('kalender_eintrag_' + offsetForAppointmentDate);
        appointmentEntry.className = 'aktiverEintrag';
        // calendarEntry Klasse bauen wird knackig
        appointmentEntry.addEventListener('mousedown', getTodaysAppointment);
    }
}

const cal = new Calendar();
cal.fillCalendar();
cal.highlightToday();
document.getElementById('vorherigerMonat').addEventListener('mousedown', cal.prevMonth);
document.getElementById('naechsterMonat').addEventListener('mousedown', cal.nextMonth);

// Nais to have in Version 3:
// 1. Highlighting und mouse down, zieht infos zum Tag im Textfeld.
// 2. Lieber neue Kind-Knoten im Kalender anlegen als leere Tabellenelemente im HTML zu haben.
//    - Dynamisch erzeugen, ist irgendwie cooler und somit auch modularer einsetzbar ohne viel Aufwand.
// 3. Klick auf Datum im Datepicker zeigt wie 1.

