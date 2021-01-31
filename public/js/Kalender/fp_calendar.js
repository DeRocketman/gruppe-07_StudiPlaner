/*
    Ein Versuch den Kalender auch mal komplett funktional zu programmieren aus Lust und Laune ;)
    Anstatt das übliche OOP Vorgehen zu verfolgen, siehe calendar.js.
    Im Prinzip die Ideen aus der eben genannten Datei jedoch deutlich kürzer implementiert und dadurch weniger Bug
    anfällig, sowie leichter zu verstehen, da weniger Text und unnötiger Bootstrap-Code.
    Leider noch nicht ganz Seiteneffektfrei. :D

    Author: Ben Ansohn McDougall
 */
const fp_calendar = (date = new Date()) => ({
    year : date.getUTCFullYear(),
    month : date.getMonth(),
    day : date.getDate(),
    weekday : date.getDay()
});

/*
    Termin Objekt, anstatt die termin.js Klasse zu nutzen.
    Ganz im Sinne der funktionalen Programmierung.

    param: datePickerDatum -> DatumsFormat wie beim Datepicker Html Element.
           terminText -> Text der zum termin eingegeben werden kann.

    Autor: Benjaimin Ansohn McDougall
 */
const termin = (datePickerDatum = toDatePickerString(fp_calendar()), terminText = 'TerminInhalt') => ({
    datum : datePickerDatum,
    text : terminText
});

/*
    Helper Array um alle Termine des Moants erfassen zu können.

    Autor: Benjamin Ansohn McDougall
 */
const terminListe = () => ({
    termine : [],
    anzahl : 0
});

/*
    Helper Methoden die Zahlen auf Strings mappt.

    param: month -> Monatsziffer
 */
const nameOfMonth = month => ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli'
    , 'August', 'September', 'Oktober', 'November', 'Dezember'][month];
/*
    Helper Methoden die Zahlen auf Strings mappt.

    param: month -> JavaScript Weekday
 */
const nameOfDay = weekday => ['fehlerInNameOfDay', 'Montag', 'Dienstag', 'Mittwoch',
        'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'][weekday];

/*
    Errechnet die Anzahl der Tage in einem Monat.

    param: obj -> fp_Calendar

    Autor: Benjamin Ansohn McDougall
 */
const daysOfMonth = obj => {
    // Setzt die Anzahl der Tage direkt auf 31, da die meisten Monate diese Anzahl an Tagen hat.
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

/*
    Ermittelt den ersten Tag im Monat.
    Ist wichtig um zu Wissen wie der Monat einzutragen ist. Geht hier um den weekday von Javascript.

    param: obj -> fp_Calendar

    Autor: Benjamin Ansohn McDougall
 */
const firstDayOfMonth = obj => {
    let earliestDay = obj.day % 7;
    let dayOfWeek = obj.weekday;
    const notAlreadyEarliestDay = earliestDay !== 1;
    const sunday = 6;

    if (notAlreadyEarliestDay) {
        while (earliestDay > 1) {
            earliestDay--;
            dayOfWeek--;
            const isEndOfWeek = dayOfWeek < 0;
            dayOfWeek = isEndOfWeek ? dayOfWeek = sunday : dayOfWeek;
        }
    }
    return dayOfWeek;
};

/*
    Füllt den Monatsstring im Titel des Kalenders

    param: obj -> fp_Calendar

    Autor: Benjamin Ansohn McDougall
 */
const fillCalendarMonth = obj => {
    let kalenderMonat = document.getElementById('kalender_monat');
    // Falls das HTML Document keine Referenzen hat werden hier keine Fehler geworfen.
    if (kalenderMonat) {
        // setzt den Monat im Kalender zu: Monat Jahr, z.B. Oktober 2020
        kalenderMonat.innerHTML = `${nameOfMonth(obj.month)} ${obj.year}`;
    }
};

/*
    Füllt den Tabellenkörper des Kalenders

    param: obj -> fp_Calendar

    Autor: Benjamin Ansohn McDougall
 */
const fillCalendar = obj => {
    fillCalendarMonth(obj);
    const firstWeekdayOfMonth = firstDayOfMonth(obj);
    // erstellt Liste mit mit Tagen des Monats
    const listOfDays = [...Array(daysOfMonth(obj)).keys()];
    // setzt den ersten Tag am entsprechenden Wochentag, wobei die Liste bei Null beginnt, hence day + 1.
    listOfDays.map(day => {
        const offset = firstWeekdayOfMonth + day;
        document.getElementById('kalender_eintrag_' + offset).innerHTML = day + 1;
    });
};

// Hier nutzen wir die Kurzhand Schreibweise ...obj, day. D.h. aus dem mitgegebenen objekt, nur das Attribut mit day nutzen.
// Sind nur Setter
const setDay = (obj, day = 1) => ({...obj, day});
const setMonth = (obj, month = 0) => ({...obj, month});
const setYear = (obj, year = new Date().getUTCFullYear()) => ({...obj, year});

/*
    Toggle für den vorherigen Monat

    param: obj -> fp_calendar

    Autor: Benjamin Ansohn McDougall
 */
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
    fp = fp_calendar(new Date(obj.year, obj.month, obj.day));
    fillCalendar(fp);
};

/*
    Toggle für den nächsten Monat

    param: obj -> fp_Calendar

    Autor: Benjamin Ansohn McDougall
 */
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
    fp = fp_calendar(new Date(obj.year, obj.month, obj.day));
    fillCalendar(fp);
};

/*
    Löscht alle Einträge in dem Kalender, wichtig bei der dynamischen Befüllung, da gerne ein paar Doppelte Tage
    auftauchen ;)

    Autor: Benjamin Ansohn McDougall
 */
const clear = () => {
    const answerToTheUltimateQuestionOfLifeTheUniverseAndEverything = 42;
    const kalenderTableDataEntries = [...Array(answerToTheUltimateQuestionOfLifeTheUniverseAndEverything).keys()];
    kalenderTableDataEntries.map(kalenderEntryTableData =>
        document.getElementById('kalender_eintrag_' + kalenderEntryTableData).innerHTML = '');
};

/*
    Hebt das heutige Datum im Kalender hervor.

    param: obj -> fp_Calendar

    Autor: Benjamin Ansohn McDougall
 */
const heutigenTagHervorheben = obj => {
    const calendarOffsetForToday = firstDayOfMonth(obj) + obj.day - 1;
    const todaysEntry = document.getElementById('kalender_eintrag_' + calendarOffsetForToday);
    todaysEntry.className = 'heute';
};

// Diese Funktion funktioniert noch nicht zuverlässig. BUGFIX
/*
    Ermittelt alle für den aktuellen Monat eingetragenen Termine.

    param: obj -> fp_Calendar

    Autor: Benjamin Ansohn McDougall
 */
const alleMonatsTermineHolen = obj => {
    const anzahlDerTageDesMonats = daysOfMonth(obj);
    const tageDesMonats = [...Array(anzahlDerTageDesMonats).keys()];
    const aktuelleTerminListe = terminListe();
    tageDesMonats.map(tag => {
        obj = setDay(obj, tag + 1);
        const heuteAlsDatePickerString = toDatePickerString(obj);
        const eintrag =  localStorage.getItem(heuteAlsDatePickerString);
        const istEintragVorhanden =  eintrag != null;
        if(istEintragVorhanden) {
            aktuelleTerminListe.termine.push(termin(heuteAlsDatePickerString,eintrag));
            aktuelleTerminListe.anzahl++;
        }
    });
    return aktuelleTerminListe;
}

/*
    Erzeugt ein String, für das DatePicker Element um es direkt ausfüllen zu können.

    param: obj => fp_Calendar

    Autor: Benjamin Ansohn McDougall
 */
const toDatePickerString = obj => {
    let day = obj.day < 10 ? '0' + obj.day : obj.day;
    return `${obj.year}-${obj.month}-${day}`;
};

/*
    Zeigt die Anzahl der Termine des Monats als String an.

    param: termine => Liste von Terminen

    Autor: Benjamin Ansohn McDougall.
 */
const termineToString = termine => `Es sind derzeit ${termine.anzahl} für diesen Monat eingetragen.`


// Ausfüherender Code.
let fp = fp_calendar();
fillCalendarMonth(fp);
fillCalendar(fp);
heutigenTagHervorheben(fp);
termine = alleMonatsTermineHolen(fp);
console.log(termineToString(termine));

document.getElementById('vorherigerMonat').addEventListener('mousedown', () => prevMonth(fp));
document.getElementById('naechsterMonat').addEventListener('mousedown', () => nextMonth(fp));
