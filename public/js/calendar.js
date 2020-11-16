/*
Klasse um grundlegende Kalender Eigenschaften zu definieren.
params: Date, default derzeitige Datum
 */
class Calendar {
    constructor(date = new Date()) {
        const currentDate = date;
        this.year = currentDate.getUTCFullYear();
        this.month = currentDate.getMonth();
        this.day = currentDate.getDate();
        this.weekday = currentDate.getDay();
        this.monthsName = this.nameOfMonth();
        this.daysName = this.nameOfDay();
        console.log(this.toString());
    }

    toString = () =>
        `Heute ist ${this.nameOfDay()} der ${this.day}. ${this.nameOfMonth()} ${this.year} mit ${this.daysOfMonth()} Tagen`;

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
    };


    // Wechselt zum vorherigen Monat und berücksichtigt dabei Jahreswechsel
    prevMonth = function () {
        let isJanuary = this.month === 0;

        if (isJanuary) {
            this.month = 11;
            this.year--;
        } else {
            this.month--;
        }
    };

    // Wechselt zum nächsten Monat und berücksichtigt dabei Jahreswechsel
    nextMonth = function () {
        console.log(this.month);
        let isDecember = this.month === 11;
        if (isDecember) {
            this.month = 0;
            this.year++;
        } else {
            this.month++;
        }
    }

    // Füllt den Kalender mit Tagen, Monat und Jahresangabe
    fillCalendar = function () {
        // setzt den Monat im Kalender zu: Monat Jahr, z.B. Oktober 2020
        let kalenderMonat = document.getElementById('kalender_monat');
        // Falls das HTML Document keine Referenzen hat werden hier keine Fehler geworfen.
        if (kalenderMonat) {
            kalenderMonat.innerHTML = this.monthsName + ' ' + this.year;


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

            // erstellt Liste mit mit Tagen des Monats
            const listOfDays = [...Array(this.daysName).keys()];
            // setzt den ersten Tag am entsprechenden Wochentag, wobei die Liste bei Null beginnt, hence day + 1.
            listOfDays.map(day =>
                document.getElementById('kalender_eintrag_'
                    + (earliestWeekday + day)).innerHTML = day + 1);

            document.getElementById('vorherigerMonat').addEventListener('mousedown', cal.prevMonth);
            document.getElementById('naechsterMonat').addEventListener('mousedown', cal.nextMonth);
        }
    }

}

const cal = new Calendar();
cal.fillCalendar();

