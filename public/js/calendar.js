function Calendar() {
    const currentDate = new Date();
    this.year = currentDate.getUTCFullYear();
    this.month = currentDate.getMonth();
    this.day = currentDate.getDate();
    this.weekday = currentDate.getDay();
    console.log('New Calendar created');
}

/*
Setzt den Namen des aktuellen Monats
 */
Calendar.prototype.nameOfMonth = function() {
    const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli'
        , 'August', 'September', 'Oktober', 'November', 'Dezember'];

    return months[this.month];
};


/*
Berechnet die Anzahl der Tage im Monat zur Darstellung im Calendar.
 */
Calendar.prototype.daysOfMonth = function () {
    // Setzt die Anzahl der Tage direkt auf 31, da die meisten Monate diese
    // Anzahl an Tagen hat.
    let numberOfDaysInMonth = 31;

    const possibleDaysOfMonth = [28,29,30,31];


    /*
    Private Funktion zur Berechnung ob es sich um ein Schaltjahr handelt.
     */
    function daysOfFebruary() {
        const isLeapYear = this.year % 4 === 0;
        if (isLeapYear) {
            numberOfDaysInMonth = 29;
        } else {
            numberOfDaysInMonth = 28;
        }
    }

    const isThirtyDayMonth = [3, 5, 8, 10].includes(this.month);
    const isFebruary = this.month === 1;

    if (isThirtyDayMonth) {
        numberOfDaysInMonth = 30;
    } else if (isFebruary) {
        daysOfFebruary.call(this);
    }
    return numberOfDaysInMonth;
};

Calendar.prototype.nameOfDay = function() {
    // fängt bei der Nummer eins an zu zählen.
    const woche = ['fehlerInNameOfDay', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
    return woche[this.weekday];
};

Calendar.prototype.prevMonth = function() {
    let isJanuary = this.month === 0;

    if(isJanuary) {
        this.month = 11;
        this.year--;
    } else {
        this.month--;
    }
};

Calendar.prototype.nextMonth = function() {
    console.log(this.month);
    let isDecember = this.month === 11;
    if(isDecember) {
        this.month = 0;
        this.year++;
    } else {
        this.month++;
    }
}

Calendar.prototype.fillCalendar = function() {
    // setzt den Monat im Kalender zu: Monat Jahr, z.B. Oktober 2020
    document.getElementById('kalender_monat').innerHTML = this.nameOfMonth() + ' ' + this.year;

    let earliestDay = this.day % 7;
    let earliestWeekday = this.weekday;
    // // Falls wir noch nicht den ersten Tag des Monats haben.
    if(earliestDay !== 1) {
        while(earliestDay > 1) {
            earliestDay--;
            earliestWeekday--;
            earliestWeekday = earliestWeekday < 0 ? earliestWeekday = 6 : earliestWeekday;
        }
    }

    // erstellt Liste mit mit Tagen des Monats
    const listOfDays = [...Array(this.daysOfMonth()).keys()];
    // setzt den ersten Tag am entsprechenden Wochentag, wobei die Liste bei Null beginnt, hence day + 1.
    listOfDays.map(day =>
        document.getElementById('kalender_eintrag_' + (earliestWeekday + day)).innerHTML = day + 1);
}


const cal = new Calendar();
console.log(`Heute ist ${cal.nameOfDay()} der ${cal.day} und der Monat ${cal.nameOfMonth()} hat ${cal.daysOfMonth()} Tage`);
cal.fillCalendar();
document.getElementById('vorherigerMonat').addEventListener('mousedown', cal.prevMonth);
document.getElementById('naechsterMonat').addEventListener('mousedown', cal.nextMonth);

