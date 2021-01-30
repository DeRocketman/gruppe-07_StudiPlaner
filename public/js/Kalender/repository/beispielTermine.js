import {Teilnehmerin} from "../../projekt/domain/teilnehmerin.js";
import {Termin} from "../domain/termin.js";

export const beispielTermin1 = new Termin(
    '2021-02-01',
    'Klausur',
    [new Teilnehmerin('Claudia Claudius')],
    false,
    'Datenbanken I um 13:45Uhr '
);

export const beispielTermin2 = new Termin(
    '2021-02-02',
    'Klausur',
    [new Teilnehmerin('Claudia Claudius', 'cc@cc2.de'),
        new Teilnehmerin('Claudius Claudius', 'ccl@cc2.de')],
    false,
    'Computer Graphics'
);

export const beispielTermin3 = new Termin(
    '2021-02-04',
    'Klausur',
    [new Teilnehmerin('Claudia Claudiorum', 'ccorum@cc2.de'),
        new Teilnehmerin('Claudius Claudia', 'ccla@cc2.de')],
    false,
    'WebProgrammierung Präsentation. .... sehr früh Morgens'
);

export const beispielTermin4 = new Termin(
    '2021-02-05',
    'Klausur',
    [new Teilnehmerin('Claudia Claudiorum', 'ccorum@cc2.de')],
    false,
    'Abgabe für Mediendesin II'
);

export const beispielTermin5 = new Termin(
    '2021-02-06',
    'Gruppenarbeit',
    [new Teilnehmerin('Squifi ', 'squifi@unicorn.university')],
    true,
    'Vorlesungsfreie Zeit für die Familie'
);
