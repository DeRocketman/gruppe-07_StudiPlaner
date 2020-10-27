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
    let nameOfMonth = "Januar";
    switch(this.month) {
        case 0:
            break;
        case 1:
            nameOfMonth = "Februar";
            break;
        case 2:
            nameOfMonth = "März";
            break;
        case 3:
            nameOfMonth = "April";
            break;
        case 4:
            nameOfMonth = "Mai";
            break;
        case 5:
            nameOfMonth = "Juni";
            break;
        case 6:
            nameOfMonth = "Juli";
            break;
        case 7:
            nameOfMonth = "August";
            break;
        case 8:
            nameOfMonth = "September";
            break;
        case 9:
            nameOfMonth = "Oktober";
            break;
        case 10:
            nameOfMonth = "November";
            break;
        case 11:
            nameOfMonth = "Dezember";
    }
    return nameOfMonth;
};


/*
Berechnet die Anzahl der Tage im Monat zur Darstellung im Calendar.
 */
Calendar.prototype.daysOfMonth = function () {
    // Setzt die Anzahl der Tage direkt auf 31, da die meisten Monate diese
    // Anzahl an Tagen hat.
    let numberOfDaysInMonth = 31;

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
    let today = 'Montag';
    switch (this.weekday) {
        case 1:
            break;
        case 2:
            today = "Dienstag";
            break;
        case 3:
            today = "Mittwoch";
            break;
        case 4:
            today = "Donnerstag";
            break;
        case 5:
            today = "Freitag";
            break;
        case 6:
            today = "Samstag";
            break;
        case 7:
            today = "Sonntag";
            break;
    }
    return today;
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

    for(let i = 0; i < this.daysOfMonth(); ++i) {
        document.getElementById("kalender_eintrag_" + (earliestWeekday + i)).innerHTML = i + 1;
    }
}


const cal = new Calendar();
console.log(`Heute ist ${cal.nameOfDay()} der ${cal.day} und der Monat ${cal.nameOfMonth()} hat ${cal.daysOfMonth()} Tage`);
cal.fillCalendar();
document.getElementById('vorherigerMonat').addEventListener('mousedown', cal.prevMonth);
document.getElementById('naechsterMonat').addEventListener('mousedown', cal.nextMonth);

