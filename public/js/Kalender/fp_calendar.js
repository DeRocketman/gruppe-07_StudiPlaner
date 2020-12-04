window.onload = () => {
const fp_calendar = (date = new Date()) => ({
    year : date.getUTCFullYear(),
    month : date.getMonth(),
    day : date.getDate(),
    weekday : date.getDay()
});

const nameOfMonth = month => ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli'
    , 'August', 'September', 'Oktober', 'November', 'Dezember'][month];
const nameOfDay = weekday => ['fehlerInNameOfDay', 'Montag', 'Dienstag', 'Mittwoch',
        'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'][weekday];
const daysOfMonth = obj => {
    // Setzt die Anzahl der Tage direkt auf 31, da die meisten Monate diese
    // Anzahl an Tagen hat.
    let numberOfDaysInMonth = 31;
    const isThirtyDayMonth = [3, 5, 8, 10].includes(obj.month);
    const isFebruary = obj.month === 1;

    if (isThirtyDayMonth) {
        numberOfDaysInMonth = 30;
    } else if (isFebruary) {
        const isLeapYear = obj.year % 4 === 0;
        isLeapYear ? numberOfDaysInMonth = 29 : numberOfDaysInMonth = 28;
    }
    return numberOfDaysInMonth;
};

const firstDayOfMonth = obj => {
        let earliestDay = obj.day % 7;
        let earliestWeekday = obj.weekday;
        // // Falls wir noch nicht den ersten Tag des Monats haben.
        if (earliestDay !== 1) {
            while (earliestDay > 1) {
                earliestDay--;
                earliestWeekday--;
                earliestWeekday = earliestWeekday < 0 ? earliestWeekday = 6 : earliestWeekday;
            }
        }
        return earliestWeekday;
};

const fillCalendarMonth = obj => {
    let kalenderMonat = document.getElementById('kalender_monat');
    // Falls das HTML Document keine Referenzen hat werden hier keine Fehler geworfen.
    if (kalenderMonat) {
        // setzt den Monat im Kalender zu: Monat Jahr, z.B. Oktober 2020
        kalenderMonat.innerHTML = `${nameOfMonth(obj.month)} ${obj.year}`;
    }
};

const fillCalendar = obj => {
    fillCalendarMonth(obj);
    const firstWeekdayOfMonth = firstDayOfMonth(obj);
    // erstellt Liste mit mit Tagen des Monats
    const listOfDays = [...Array(daysOfMonth(obj)).keys()];
    // setzt den ersten Tag am entsprechenden Wochentag, wobei die Liste bei Null beginnt, hence day + 1.
    listOfDays.map(day => {
        const offset = firstWeekdayOfMonth + day;
        document.getElementById('kalender_eintrag_' + (firstWeekdayOfMonth + day)).innerHTML = day + 1;
    });
};

const setMonth = (obj, month = 0) => ({...obj, month});
const setYear = (obj, year = new Date().getUTCFullYear()) => ({...obj, year});

const prevMonth = obj => {
    let isJanuary = obj.month === 0;
    if(isJanuary) {
        obj = setMonth(obj, 11);
        obj.year--
        obj = setYear(obj, obj.year);
    } else {
        obj = setMonth(obj, obj.month-=1);
    }
    clear();
    fillCalendar(fp_calendar(new Date(obj.year, obj.month, obj.day)));
};

const nextMonth = obj => {
    let isDecember = obj.month === 11;
    if(isDecember) {
        obj = setMonth(obj, 0);
        obj.year++;
        obj = setYear(obj, obj.year);
    } else {
        obj = setMonth(obj, obj.month+=1);
    }
    clear(obj);
    fillCalendar(fp_calendar(new Date(obj.year, obj.month, obj.day)));
};

const clear = () => {
    const answerToTheUltimateQuestionOfLifeTheUniverseAndEverything = 42;
    const kalenderTableDataEntries = [...Array(answerToTheUltimateQuestionOfLifeTheUniverseAndEverything).keys()];
    kalenderTableDataEntries.map(kalenderEntryTableData =>
        document.getElementById('kalender_eintrag_' + kalenderEntryTableData).innerHTML = '');
};

const toDatePickerString = obj => {
    let day = obj.day < 10 ? '0' + obj.day : obj.day;
    return `${obj.year}-${obj.month}-${day}`;
};
const toFullString = obj => `Heute ist ${nameOfDay(obj.weekday)} der ${obj.day}. ${nameOfMonth(obj.month)} ${obj.year} mit ${daysOfMonth(obj)} Tagen`;

// let fp = fp_calendar();
// fillCalendarMonth(fp);
// fillCalendar(fp);
// document.getElementById('vorherigerMonat').addEventListener('mousedown', () => prevMonth(fp));
// document.getElementById('naechsterMonat').addEventListener('mousedown', () => nextMonth(fp));

};
